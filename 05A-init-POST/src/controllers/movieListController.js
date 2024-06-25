import movieListService from '../services/movieListService.js';
import NotFoundError from '../error/NotFoundError.js';
// API - 5 Get All Movie List
const getAllMovieLists = async (req, res, next) => {
  try {
    const movieLists = await movieListService.getMovieLists();
    res.status(200).json({ message: 'Get All Movie Lists', data: movieLists });
  } catch (error) {
    next(error);
  }
};

// API - 6 Get Movie List By ID
const getMovieListById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieList = await movieListService.getMovieListById(Number(id));
    if (!movieList) {
      throw new NotFoundError(`Movie List with id ${id} not found`);
    }
    res.status(200).json({ message: 'Get Movie List By ID', data: movieList });
  } catch (error) {
    next(error);
  }
};

// API - 7 Create Movie List
const createMovieList = async (req, res, next) => {
  res.send('POST /api/movie-lists');
};

// API - 8 Update Movie List
const updateMovieList = async (req, res, next) => {
  res.send('PATCH /api/movie-lists/:id');
};

// API - 17 Delete Movie List (Soft Delete)
const deleteMovieList = async (req, res, next) => {
  res.send('DELETE /api/movie-lists/:id');
};

// API - 8  Add movie to movie list
const addMovieToMovieList = async (req, res, next) => {
  res.send('POST /api/movie-lists/:movieListId/movies/:movieId');
};

// API - 16  Remove movie from movie list
const removeMovieFromMovieList = async (req, res, next) => {
  res.send('DELETE /api/movie-lists/:movieListId/movies/:movieId');
};

export {
  getAllMovieLists,
  getMovieListById,
  createMovieList,
  updateMovieList,
  deleteMovieList,
  addMovieToMovieList,
  removeMovieFromMovieList,
};
