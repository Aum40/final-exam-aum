import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import { validate } from '../middlewares/validate.middleware.js';
import { autheticate } from '../middlewares/authenticate.middleware.js';

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

authRouter.get('/me', autheticate, authController.getMe);
