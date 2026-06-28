import { email } from 'zod';
import { hashService } from './hash.service.js';
import { userService } from './user.service.js';
import { createError } from '../utils/create-error.js';
import { jwtService } from './jwt.service.js';

export const authService = {};
authService.register = async (input) => {
  const hash = await hashService.hash(input.password);
  const user = await userService.create({
    email: input.email,
    password: hash,
    name: input.name,
  });
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword; // ← เพิ่ม return ข้อมูล user (ไม่มี password)
};

authService.login = async (email, password) => {
  const user = await userService.findByEmail(email);
  if (!user) {
    console.log('1');
    createError(401, 'invalid email or password');
  }
  const isMatch = await hashService.compare(password, user.password);
  if (!isMatch) {
    console.log('2');
    createError(401, 'invalid email or password');
  }
  const access_token = jwtService.sign({
    sub: user.id,
    email: user.email,
  });
  const { password: _, ...userWithoutPassword } = user;

  return { access_token, user: userWithoutPassword };
};
