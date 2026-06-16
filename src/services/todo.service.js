import { prisma } from '../db/prisma.js';

export const todoService = {};
todoService.create = (userId, input) =>
  prisma.todo.create({
    data: {
      userId,
      ...input,
      dueDate: input.dueDate ? new Date(input.dueDate) : null,
    },
  });
