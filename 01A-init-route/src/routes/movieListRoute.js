import express from "express";

const router = express.Router();

// API - 5 Get All Movie List
router.get("/", (req, res) => {
	res.send("GET /api/movie-lists");
});

// API - 6 Get Movie List By ID
router.get("/:id", (req, res) => {
	res.send("GET /api/movie-lists/:id");
});

// API - 7 Create Movie List
router.post("/", (req, res) => {
	res.send("POST /api/movie-lists");
});

// API - 18 Update Movie List
router.patch("/:id", (req, res) => {
	res.send("PATCH /api/movie-lists/:id");
});

// API - 17 Delete Movie List (Soft Delete)
router.delete("/:id", (req, res) => {
	res.send("DELETE /api/movie-lists/:id");
});

// API - 8  Add movie to movie list
router.post("/:movieListId/movies/:movieId", (req, res) => {
	res.send("POST /api/movie-lists/:movieListId/movies/:movieId");
});

// API - 16  Remove movie from movie list
router.delete("/:movieListId/movies/:movieId", (req, res) => {
	res.send("DELETE /api/movie-lists/:movieListId/movies/:movieId");
});

export default router;
