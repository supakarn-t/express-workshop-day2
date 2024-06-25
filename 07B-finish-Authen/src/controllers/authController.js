import userService from '../services/userService.js';
import { hashPassword, comparePassword } from '../utils/hash.js';
import { sign } from '../utils/token.js';
import { validateRegister } from '../utils/validate.js';
import BadRequestError from '../error/BadRequestError.js';
// API-10 : Register
const register = async (req, res, next) => {
  try {
    // Validate user data
    const { error } = validateRegister(req.body);
    if (error) throw new BadRequestError(error.message);
    if (req.body.password !== req.body.confirmPassword) {
      throw new BadRequestError('Password does not match');
    }

    // Check if email already exists
    const user = await userService.getUserByEmail(req.body.email);
    if (user) throw new BadRequestError('Email already exists');

    // Hash password
    const hashedPassword = await hashPassword(req.body.password);

    // Create user
    delete req.body.confirmPassword;
    const newUser = await userService.createUser({
      ...req.body,
      password: hashedPassword,
    });

    // Generate token
    const token = sign({ id: newUser.id });
    delete newUser.password;

    res.status(201).json({ message: 'User created', data: newUser, access_token: token });
  } catch (error) {
    next(error);
  }
};

// API-11 : Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await userService.getUserByEmail(email);
    if (!user) throw new BadRequestError('Invalid credentials');

    // Compare password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw new BadRequestError('Invalid credentials');

    // Generate token
    const token = sign({ id: user.id });
    delete user.password;

    res.status(200).json({ message: 'Login success', data: user, access_token: token });
  } catch (error) {
    next(error);
  }
};

// API-12 : Get User
const getProfile = async (req, res, next) => {
  res.send('GET /api/auth/profile');
};

// API-13 : Update User Profile
const updateProfile = async (req, res, next) => {
  res.send('PATCH /api/auth/profile');
};

// API-14 : Delete User Profile
const deleteProfile = async (req, res, next) => {
  res.send('DELETE /api/auth/profile');
};

export { register, login, getProfile, updateProfile, deleteProfile };
