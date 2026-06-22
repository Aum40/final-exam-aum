import z from 'zod';

export const createTodoSchema = z.object({
  title: z.string('Title must be a string').trim().min(1, 'Title is required'),
  transactionDate: z.iso.date('invalid ISO date format').optional(),
});

export const updateTodoSchema = createTodoSchema.partial();
