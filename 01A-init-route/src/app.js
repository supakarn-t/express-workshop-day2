import "dotenv/config";
import express from "express";

// ###### TASK : Import Route Here
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoute.js";
import movieListRoute from "./routes/movieListRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;

// ###### TASK : Set Up Global Middleware
// > Logger

// > JSON Body Parser

// > URL Encoded Body Parser (รอเฉลย)

// ##### TASK : Set Up Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/movie-lists", movieListRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
