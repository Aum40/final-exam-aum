import z from 'zod';

export const createTodoSchema = z.object({
  title: z.string('Title must be a string').trim().min(1, 'Title is required'),
  amount: z
    .number('Amount must be a number')
    .positive('Amount must be positive'),
  type: z.enum(['EXPENSE', 'INCOME'], 'Type must be EXPENSE or INCOME'),
  transactionDate: z.iso.date('invalid ISO date format'),
  note: z.string('Note must be a string').trim().optional(),
});

export const updateTodoSchema = createTodoSchema.partial();
