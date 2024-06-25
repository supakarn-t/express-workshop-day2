import express from 'express';
import * as authController from '../controllers/authController.js';
import authenticateMiddleware from '../middleware/authenticateMiddleware.js';

const router = express.Router();

// API-10 : Register
router.post('/register', authController.register);

// API-11 : Login
router.post('/login', authController.login);

// API-12 : Get User
router.get('/profile', authenticateMiddleware, authController.getProfile);

// API-13 : Update User Profile
router.patch('/profile', authenticateMiddleware, authController.updateProfile);

// API-14 : Delete User Profile
router.delete('/profile', authenticateMiddleware, authController.deleteProfile);

export default router;
