import express from 'express';

const router = express.Router();

// API-10 : Register
router.post('/register', (req, res) => {
  res.send('POST /api/auth/register');
});

// API-11 : Login

// API-12 : Get User

// API-13 : Update User Profile

// API-14 : Delete User Profile

export default router;
