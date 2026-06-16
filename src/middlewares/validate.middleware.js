import z from 'zod';
import { createError } from '../utils/create-error.js';

export const validate = (schemas) => (req, res, next) => {
  if (schemas.body) {
    const result = schemas.body.safeParse(req.body);
    if (!result.success) {
      createError(
        400,
        'Provided request body is invalid',
        z.flattenError(result.error),
      );
      console.log(result.data);
    }
  }
  next();
};
