import z from 'zod';

export const createTodoSchema = z.object({
  title: z.string('Title must be a string').trim().min(1, 'Title is required'),
  status: z.boolean('status must be a boolean').optional(),
  dueDate: z.iso.date('invalid ISO date format').optional(),
});

export const updateTodoSchema = createTodoSchema.partial();
