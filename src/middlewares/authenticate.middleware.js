import { jwtService } from '../services/jwt.service.js';
import { userService } from '../services/user.service.js';
import { createError } from '../utils/create-error.js';

export const autheticate = async (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log('authorization', authorization);
  if (!authorization) {
    createError(400, 'Authorization is missing');
  }
  if (!authorization.startsWith('Bearer ')) {
    createError(400, 'Invalid authorization scheme');
  }
  const token = authorization.split(' ')[1];

  try {
    const payload = jwtService.verify(token);
    const user = await userService.findById(payload.sub);
    if (!user) {
      createError(404, 'User not found');
    }
    req.user = user;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      createError(401, 'Token Expired');
    }
    if (err.name === 'jsonWebTokenError') {
      createError(401, 'Invalid Token');
    }
    throw err;
  }
  next();
};
