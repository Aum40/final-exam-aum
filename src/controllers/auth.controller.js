import { authService } from '../services/auth.service.js';

export const authController = {};
authController.register = async (req, res) => {
  const user = await authService.register(req.body);
  res.status(201).json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
};
authController.login = async (req, res) => {
  const { email, password } = req.body;
  const { access_token, user } = await authService.login(email, password);
  res.status(200).json({
    success: true,
    data: {
      accessToken: access_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    },
  });
};

authController.getMe = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
    },
  });
};
