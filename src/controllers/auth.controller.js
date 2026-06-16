import { authService } from '../services/auth.service.js';

export const authController = {};
authController.register = async (req, res) => {
  await authService.register(req.body);
  res.status(201).json({ message: 'user registered successfully' });
};
authController.login = async (req, res) => {
  const { email, password } = req.body;
  const { access_token, user } = await authService.login(email, password);
  res.status(200).json({ access_token, user });
};
