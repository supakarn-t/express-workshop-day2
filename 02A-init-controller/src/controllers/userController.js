// API - 1 Get All Users
const getAllUsers = async (req, res, next) => {
  res.send('GET /api/users');
};

// API - 2 Get User By ID
const getUserById = async (req, res, next) => {
  res.send('GET /api/users/:id');
};

// API - 14 Delete User By ID (Soft Delete)
const deleteUserById = async (req, res, next) => {
  res.send('DELETE /api/users/:id');
};

export { getAllUsers, getUserById, deleteUser };
