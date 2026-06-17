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
    }
    req.body = result.data;
  }
  if (schemas.params) {
    const result = schemas.params.safeParse(req.params);
    if (!result.success) {
      createError(
        400,
        'Provided request params is invalid',
        z.flattenError(result.error),
      );
    }
    req.params = result.data;
  }
  next();
};
