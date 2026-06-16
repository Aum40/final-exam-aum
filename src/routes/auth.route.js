import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { registerSchema } from '../schemas/auth.schema.js';
import { validate } from '../middlewares/validate.middleware.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validate({ body: registerSchema }),
  authController.register,
);
export { authRouter };

//validate both req.body and req.param
//todoRouter.put('/:todoId',validate({body:updateTodoSchema,param:intIdSchema}))
