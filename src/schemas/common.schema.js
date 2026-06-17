import z from 'zod';

export const intIdSchema = z.object({
  id: z.coerce
    .number('id must be a number')
    .int('id must be an integer')
    .positive('id must be positive value'),
});
