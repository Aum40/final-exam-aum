import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import { validate } from '../middlewares/validate.middleware.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validate({ body: registerSchema }),
  authController.register,
);
authRouter.post(
  '/login',
  validate({ body: loginSchema }),
  authController.login,
);
//validate both req.body and req.param
//todoRouter.put('/:todoId',validate({body:updateTodoSchema,param:intIdSchema}))
