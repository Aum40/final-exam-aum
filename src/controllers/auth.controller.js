import { authService } from '../services/auth.service.js';

export const authController = {};
authController.register = async (req, res) => {
  await authService.register(req.body);
  res.status(201).json({ message: 'user registered successfully' });
};
