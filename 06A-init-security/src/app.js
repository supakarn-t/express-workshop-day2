import "dotenv/config";
import express from "express";
import morgan from "morgan";

// ###### TASK : Import Route Here
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoute.js";
import movieListRoute from "./routes/movieListRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import notfoundMiddleware from "./middleware/notfoundMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorMiddleware.js";

import authenticateMiddleware from "./middleware/authen.js";

const app = express();
const PORT = process.env.PORT || 8000;

// ###### TASK : Set Up Global Middleware
// > Logger
app.use(morgan("dev"));

// > JSON Body Parser
app.use(express.json());

// > URL Encoded Body Parser (รอเฉลย)
app.use(express.urlencoded({ extended: true }));

// > Static Files
app.use(express.static("public"));

// ##### TASK : Set Up Routes
app.use("/api/auth", authRoute);
app.use("/api/users", authenticateMiddleware, userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/movie-lists", movieListRoute);
app.use("/api/reviews", reviewRoute);

// Handle 404
app.use(notfoundMiddleware);
// Handle Error
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
