import express from 'express';

const router = express.Router();

// API - 1 Get All Users
router.get('/', (req, res) => {
  res.send('GET /api/users');
});

// API - 2 Get User By ID
router.get('/:id', (req, res) => {
  res.send('GET /api/users/:id');
});

// API - 14 Delete User By ID (Soft Delete)
router.delete('/:id', (req, res) => {
  res.send('DELETE /api/users/:id');
});

export default router;
