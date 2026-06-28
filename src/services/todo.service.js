import { prisma } from '../db/prisma.js';
import { createError } from '../utils/create-error.js';

export const todoService = {};
todoService.create = (userId, input) =>
  prisma.expense.create({
    data: {
      userId,
      ...input,
      transactionDate: new Date(input.transactionDate),
    },
  });
todoService.update = async (id, userId, input) => {
  const todo = await prisma.expense.findUnique({ where: { id } });
  if (!todo) {
    createError(404, `Todo item with id: ${id} not found`);
  }
  if (userId !== todo.userId) {
    createError(403, 'you do not have permission to perform this action');
  }
  return prisma.expense.update({
    where: { id },
    data: {
      ...input,
      transactionDate: input.transactionDate
        ? new Date(input.transactionDate)
        : undefined,
    },
  });
};
todoService.delete = async (id, userId) => {
  const todo = await prisma.expense.findUnique({ where: { id } });
  if (!todo) {
    createError(404, `Todo item with id: ${id} not found`);
  }
  if (userId !== todo.userId) {
    createError(403, 'you do not have permission to perform this action');
  }
  return prisma.expense.delete({ where: { id } });
};
todoService.findById = async (id, userId) => {
  const todo = await prisma.expense.findUnique({ where: { id } });
  if (!todo) {
    createError(404, `Todo item with id: ${id} not found`);
  }
  if (userId !== todo.userId) {
    createError(403, 'you do not have permission to perform this action');
  }
  return todo;
};
todoService.findAll = (userId) =>
  prisma.expense.findMany({
    where: { userId },
    orderBy: {
      updatedAt: 'desc',
    },
  });
