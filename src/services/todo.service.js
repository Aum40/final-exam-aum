import { prisma } from '../db/prisma.js';
import { createError } from '../utils/create-error.js';

export const todoService = {};
todoService.create = (userId, input) =>
  prisma.todo.create({
    data: {
      userId,
      ...input,
      transactionDate: input.transactionDate
        ? new Date(input.transactionDate)
        : null,
    },
  });
todoService.update = async (id, userId, input) => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  if (!todo) {
    createError(404, `Todo item with id: ${id} not found`);
  }
  if (userId !== todo.userId) {
    createError(403, 'you do not have permission to perform this action');
  }
  return prisma.todo.update({
    where: { id },
    data: {
      ...input,
      transactionDate: input.transactionDate
        ? new Date(input.transactionDate)
        : null,
    },
  });
};
todoService.findAll = (userId) =>
  prisma.todo.findMany({
    where: { userId },
    orderBy: {
      updatedAt: 'desc',
    },
  });
