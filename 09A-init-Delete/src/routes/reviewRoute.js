import express from 'express';
import * as reviewController from '../controllers/reviewController.js';
import authenticateMiddleware from '../middleware/authenticateMiddleware.js';

const router = express.Router();

// API - 22 Get All Review By Movie ID
router.get('/:movieId', reviewController.getAllReviewsByMovieId);

// API - 23 Get Review By ID and Movie ID
router.get('/:movieId/:id', reviewController.getReviewByIdAndMovieId);

// API - 24 Create Review
router.post('/', authenticateMiddleware, reviewController.createReview);

// API - 25 Update Review
router.patch('/:id', authenticateMiddleware, reviewController.updateReview);

// API - 26 Delete Review
router.delete('/:id', authenticateMiddleware, reviewController.deleteReview);

export default router;
