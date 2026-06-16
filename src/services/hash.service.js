import bcrypt from 'bcrypt';
const SALT_ROUND = 12;
export const hashService = {};
hashService.hash = (plain) => bcrypt.hash(plain, SALT_ROUND);
