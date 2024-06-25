import "dotenv/config";
import express from "express";
import morgan from "morgan";

// ###### TASK : Import Route Here
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoute.js";
import movieListRoute from "./routes/movieListRoute.js";
import reviewRoute from "./routes/reviewRoute.js";

// Middleware
import notFoundMiddleware from "./middleware/notFound.js";
import errorMiddleware from "./middleware/error.js";

const app = express();
const PORT = process.env.PORT || 8000;

// ###### TASK : Set Up Global Middleware
// > Logger
app.use(morgan("dev"));

// > JSON Body Parser
app.use(express.json());

// > URL Encoded Body Parser (รอเฉลย)
app.use(express.urlencoded({ extended: true }));

// > Serve Static File eg. HTML, CSS, JS
// อนุญาตให้ browser อ่านไฟล์จากเครื่องเราได้
app.use(express.static("public"));

// ##### TASK : Set Up Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/movie-lists", movieListRoute);
app.use("/api/reviews", reviewRoute);

// Route => always error
// app.get("/api/error", (req, tes, next) => {
// 	try {
// 		throw Error("It's Broke");
// 	} catch (error) {
// 		next(error);
// 		// next() จะเรียก middleware ตัวถัดไป
// 		// next(error) จะเรียก error middleware
// 	}
// });

// Handle Not found
app.use("*", notFoundMiddleware);

// Handle Error => throw Error()
app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
