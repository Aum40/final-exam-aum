import { Router } from 'express';
import { todocontroller } from '../controllers/todo.controller.js';
import { autheticate } from '../middlewares/authenticate.middleware.js';
import { check } from 'zod';
import { checkRole } from '../middlewares/check-role.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createTodoSchema, updateTodoSchema } from '../schemas/todo.schema.js';
import { intIdSchema } from '../schemas/common.schema.js';
export const todoRounter = Router();
todoRounter.use(autheticate);
// todoRounter.use(checkRole('USER', 'ADMIN'));
todoRounter.post(
  '/',
  validate({ body: createTodoSchema }),
  todocontroller.create,
);
todoRounter.patch(
  '/:id',
  validate({ body: updateTodoSchema, params: intIdSchema }),
  todocontroller.update,
);
todoRounter.delete(
  '/:id',
  validate({ params: intIdSchema }),
  todocontroller.delete,
);
todoRounter.get(
  '/:id',
  validate({ params: intIdSchema }),
  todocontroller.getOne,
);
todoRounter.get('/', todocontroller.getAll);
