import movieService from '../services/movieService.js';
import NotFoundError from '../error/NotFoundError.js';
import BadRequestError from '../error/BadRequestError.js';
import { validateMovie } from '../utils/validate.js';
// API - 3 Get All Movie
const getAllMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json({ message: 'Get All Movies', data: movies });
  } catch (error) {
    next(error);
  }
};

// API - 4 Get Movie By ID

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieById(Number(id));
    if (!movie) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    res.status(200).json({ message: 'Get Movie By ID', data: movie });
  } catch (error) {
    next(error);
  }
};

// API - 9 Create Movie
const createMovie = async (req, res, next) => {
  try {
    const { title, description, releaseDate, genre, duration, rating } = req.body;
    const { error } = await validateMovie({
      title,
      description,
      releaseDate,
      genre,
      duration,
      rating,
    });
    if (error) {
      throw new BadRequestError(error.message);
    }
    const data = { title, description, releaseDate, genre, duration, rating };
    const movie = await movieService.createMovie(data);

    res.status(201).json({ message: 'Create Movie', data: movie });
  } catch (error) {
    next(error);
  }
};

// API - 21 Update Movie
const updateMovie = async (req, res, next) => {
  res.send('PATCH /api/movies/:id');
};

// API - 15 Delete Movie (Soft Delete)
const deleteMovie = async (req, res, next) => {
  res.send('DELETE /api/movies/:id');
};

// API - 19 Restore Movie
const restoreMovie = async (req, res, next) => {
  res.send('PATCH /api/movies/:id/restore');
};

export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie, restoreMovie };
