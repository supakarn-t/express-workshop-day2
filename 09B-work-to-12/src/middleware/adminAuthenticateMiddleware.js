import { verify } from '../utils/token.js';
import userService from '../services/userService.js';
import UnAuthorizeError from '../error/UnAuthorizeError.js';

const adminAuthenticateMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new UnAuthorizeError('Unauthenticated');
    const decoded = verify(token);
    const user = await userService.getUserById(decoded.id);
    console.log('Admin', user.isAdmin);
    if (!user) throw new UnAuthorizeError('Unauthenticated');
    if (!user.isAdmin) throw new UnAuthorizeError('Unauthenticated');

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default adminAuthenticateMiddleware;
