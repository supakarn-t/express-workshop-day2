import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  isAdmin: Joi.boolean(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const movieSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  releaseDate: Joi.date().required(),
  genre: Joi.string().required(),
  duration: Joi.number().required(),
  rating: Joi.number().required(),
  image: Joi.string().uri(),
});

const movieListSchema = Joi.object({
  name: Joi.string().required(),
  userId: Joi.number(),
});

const movieListItemsSchema = Joi.object({
  movieId: Joi.number().required(),
  movieListId: Joi.number().required(),
});

const reviewSchema = Joi.object({
  rating: Joi.number().required(),
  comment: Joi.string().required(),
  movieId: Joi.number().required(),
  userId: Joi.number().required(),
});

const validateRegister = async (data) => {
  return registerSchema.validate(data);
};

const validateLogin = async (data) => {
  return loginSchema.validate(data);
};

const validateMovie = async (data) => {
  return movieSchema.validate(data);
};

const validateMovieList = async (data) => {
  return movieListSchema.validate(data);
};

const validateMovieListItems = async (data) => {
  return movieListItemsSchema.validate(data);
};

const validateReview = async (data) => {
  return reviewSchema.validate(data);
};
export {
  validateRegister,
  validateLogin,
  validateMovie,
  validateMovieList,
  validateMovieListItems,
  validateReview,
};
