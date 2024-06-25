import reviewService from '../services/reviewService.js';
// API - 22 Get All Review By Movie ID
const getAllReviewsByMovieId = async (req, res, next) => {
  const { movieId } = req.params;
  console.log(movieId);
  const reviews = await reviewService.getReviewsByMovieId(Number(movieId));
  return res.status(200).json({ message: 'Get All Reviews By Movie ID', data: reviews });
};

// API - 23 Get Review By ID and Movie ID
const getReviewByIdAndMovieId = async (req, res, next) => {
  console.log(req.params);
  const { movieId, id } = req.params;
  const review = await reviewService.getReviewByIdAndMovieId(Number(movieId), Number(id));
  return res.status(200).json({ message: 'Get Review By ID and Movie ID', data: review });
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
