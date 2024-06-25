import db from '../model/prisma-client.js';

// TREAT THIS FILE LIKE REPOSITORY

const movieListService = {
  async createMovieList(data) {
    return db.movieList.create({ data });
  },

  async getMovieLists() {
    return db.movieList.findMany({
      include: {
        movieListItems: {
          include: {
            movie: true,
          },
        },
      },
    });
  },

  async getMovieListById(id) {
    return db.movieList.findUnique({
      where: { id },
      include: {
        movieListItems: {
          include: {
            movie: true,
          },
        },
      },
    });
  },

  async updateMovieList(id, data) {
    return db.movieList.update({ where: { id }, data });
  },

  async deleteMovieList(id) {
    return db.movieList.delete({ where: { id } });
  },
  async addMovieToMovieList(data) {
    return db.movieListItem.create({ data });
  },
};

export default movieListService;
