import z, { email } from 'zod';

const passwordSchema = z
  .string()
  .regex(
    /^[0-9a-zA-Z]{6,}$/,
    'password must have least 6 characters and contain only letter and number',
  );
export const registerSchema = z
  .object({
    email: z.email(),
    password: passwordSchema,
    confirm: passwordSchema,
  })
  .refine((Value) => Value.password === Value.confirm, {
    error: 'Password and comfirm password did not match',
    path: ['confirm'],
  })
  .transform(({ confirm, ...data }) => data);

export const loginSchema = z.object({
  email: z.email('invalid email address'),
  password: z
    .string('password must be a string')
    .min(1, 'password is required'),
});
