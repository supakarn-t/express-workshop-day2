import { verify } from "../utils/token.js";
import userService from "../services/userService.js";
// import UnAuthorizeError from "../error/UnAuthorizeError.js";

const authenticateMiddleware = async (req, res, next) => {
	try {
		// แกะ req.header
		const token = req.header("Authorization")?.replace("Bearer ", "");
		// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidmlja3kiLCJpYXQiOjE3MTkzMDg0NjMsImV4cCI6MTcxOTkxMzI2M30.NN5wYE3ei6Mfhf8FgVdfK0jBpQnZRT8jeWaaXPOJuVk

		if (!token) throw new Error("Unauthenticated");

		// ถอด token
		const decoded = verify(token);
		const user = await userService.getUserById(decoded.id);
		if (!user) throw new Error("Unauthenticated");

		// เจอ user ให้เพิ่ม key ใน request obj {user:user}
		req.user = user;

		next(); // เรียกตัวถัดไป
	} catch (error) {
		next(error);
	}
};

export default authenticateMiddleware;
