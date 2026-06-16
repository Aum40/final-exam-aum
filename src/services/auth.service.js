import { hashService } from './hash.service.js';
import { userService } from './user.service.js';

export const authService = {};
authService.register = async (input) => {
  // hash password
  const hash = await hashService.hash(input.password);
  await userService.create({ email: input.email, password: hash });
  //insert new user
};
