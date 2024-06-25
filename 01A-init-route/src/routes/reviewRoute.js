import express from "express";

const router = express.Router();

// API - 22 Get All Review By Movie ID
router.get("/:movieId", (req, res) => {
	res.send("GET /api/reviews/:movieId");
});

// API - 23 Get Review By ID and Movie ID
router.get("/:movieId/:id", (req, res) => {
	res.send("GET /api/reviews/:movieId/:id");
});

// API - 24 Create Review
router.post("/", (req, res) => {
	res.send("POST /api/reviews");
});

// API - 25 Update Review
router.patch("/:id", (req, res) => {
	res.send("PATCH /api/reviews/:id");
});

// API - 26 Delete Review
router.delete("/:id", (req, res) => {
	res.send("DELETE /api/reviews/:id");
});

export default router;
