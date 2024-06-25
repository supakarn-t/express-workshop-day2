import express from "express";

const router = express.Router();

// API - 3 Get All Movie
router.get("/", (req, res) => {
	res.send("GET /api/movies");
});

// API - 4 Get Movie By ID
router.get("/:id", (req, res) => {
	res.send("GET /api/movies/:id");
});

// API - 9 Create Movie
router.post("/", (req, res) => {
	res.send("POST /api/movies");
});

// API - 21 Update Movie
router.patch("/:id", (req, res) => {
	res.send("PATCH /api/movies/:id");
});

// API - 15 Delete Movie (Soft Delete)
router.delete("/:id", (req, res) => {
	res.send("DELETE /api/movies/:id");
});

// API - 19 Restore Movie
router.patch("/:id/restore", (req, res) => {
	res.send("PATCH /api/movies/:id/restore");
});

export default router;
