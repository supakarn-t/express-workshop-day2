import movieService from "../services/movieService.js";
import BadRequestError from "../error/BadRequest.js";

// API - 3 Get All Movie
const getAllMovies = async (req, res, next) => {
	const movies = await movieService.getMovies();
	res.status(200).json({ message: "Get All Movies", data: movies });
};

// API - 4 Get Movie By ID
const getMovieById = async (req, res, next) => {
	const { id } = req.params;
	const movie = await movieService.getMovieById(Number(id));
	res.status(200).json({ message: "Get Movie By ID", data: movie });
};

// API - 9 Create Movie
const createMovie = async (req, res, next) => {
	try {
		// แกะ body
		const { title, description, image, releaseDate, genre, duration, rating } =
			req.body;

		// validate
		if (
			!title ||
			!description ||
			!image ||
			!releaseDate ||
			!genre ||
			!duration ||
			!rating
		)
			throw new BadRequestError("All field is required");

		const movie = await movieService.createMovie({
			title,
			description,
			image,
			releaseDate,
			genre,
			duration,
			rating,
		});

		res.status(201).json({ message: "created success" });
	} catch (error) {
		next(error);
	}
};

// API - 21 Update Movie
const updateMovie = async (req, res, next) => {
	res.send("PATCH /api/movies/:id");
};

// API - 15 Delete Movie (Soft Delete)
const deleteMovie = async (req, res, next) => {
	res.send("DELETE /api/movies/:id");
};

// API - 19 Restore Movie
const restoreMovie = async (req, res, next) => {
	res.send("PATCH /api/movies/:id/restore");
};

export {
	getAllMovies,
	getMovieById,
	createMovie,
	updateMovie,
	deleteMovie,
	restoreMovie,
};
