import reviewService from '../services/reviewService.js';
import NotFoundError from '../error/NotFoundError.js';
// API - 22 Get All Review By Movie ID
const getAllReviewsByMovieId = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    console.log(movieId);
    const reviews = await reviewService.getReviewsByMovieId(Number(movieId));
    return res.status(200).json({ message: 'Get All Reviews By Movie ID', data: reviews });
  } catch (error) {
    next(error);
  }
};

// API - 23 Get Review By ID and Movie ID
const getReviewByIdAndMovieId = async (req, res, next) => {
  try {
    console.log(req.params);
    const { movieId, id } = req.params;
    const review = await reviewService.getReviewByIdAndMovieId(Number(movieId), Number(id));
    if (!review) {
      throw new NotFoundError(`Review with id ${id} and movieId ${movieId} not found`);
    }
    return res.status(200).json({ message: 'Get Review By ID and Movie ID', data: review });
  } catch (error) {
    next(error);
  }
};

// API - 24 Create Review
const createReview = async (req, res, next) => {
  res.send('POST /api/reviews');
};

// API - 25 Update Review
const updateReview = async (req, res, next) => {
  res.send('PATCH /api/reviews/:id');
};

// API - 26 Delete Review
const deleteReview = async (req, res, next) => {
  res.send('DELETE /api/reviews/:id');
};

export {
  getAllReviewsByMovieId,
  getReviewByIdAndMovieId,
  createReview,
  updateReview,
  deleteReview,
};
