import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { token } from 'morgan';

export const jwtService = {};

jwtService.sign = (payload) =>
  jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

jwtService.verify = (token) => jwt.verify(token, env.JWT_SECRET);
