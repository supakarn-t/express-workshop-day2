import userService from '../services/userService.js';
import NotFoundError from '../error/NotFoundError.js';

// API - 1 Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ message: 'Get All Users', data: users });
  } catch (error) {
    next(error);
  }
};

// API - 2 Get User By ID
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (!user) {
      throw new NotFoundError(`User with id ${id} not found`);
    }
    res.status(200).json({ message: 'Get User By ID', data: user });
  } catch (error) {
    next(error);
  }
};

// API - 14 Delete User By ID (Soft Delete)
const deleteUserById = async (req, res, next) => {
  res.send('DELETE /api/users/:id');
};

export { getAllUsers, getUserById, deleteUserById };
