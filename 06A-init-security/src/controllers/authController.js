import { hashPassword, comparePassword } from "../utils/hash.js";
import userServise from "../services/userService.js";
import { sign } from "../utils/token.js";

// API-10 : Register
const register = async (req, res, next) => {
	try {
		const { email, name, password, isAdmin } = req.body;

		// validaete

		// hash password
		const hashedPassword = await hashPassword(password);

		// เก็บข้อมูลลง db
		const newUser = await userServise.createUser({
			email,
			name,
			password: hashedPassword,
			isAdmin,
		});

		delete newUser.password;

		res.status(201).json({
			message: "register success",
			data: newUser,
		});
	} catch (error) {
		next(error);
	}
};

// API-11 : Login
const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const existUser = await userServise.getUserByEmail(email);
		if (!existUser) {
			return res.status(400).json({ meaasage: "Invalid Credential" });
		}

		const hashedPassword = existUser.password;
		const isMatch = await comparePassword(password, hashedPassword);
		if (!isMatch) {
			return res.status(400).json({ meaasage: "Invalid Credential" });
		}

		const token = sign({ id: existUser.id, email: existUser.email });
		res.status(200).json({
			message: "Ligin success",
			access_token: token,
		});
	} catch (error) {
		next(error);
	}
};

// API-12 : Get User
const getProfile = async (req, res, next) => {
	res.send("GET /api/auth/profile");
};

// API-13 : Update User Profile
const updateProfile = async (req, res, next) => {
	res.send("PATCH /api/auth/profile");
};

// API-14 : Delete User Profile
const deleteProfile = async (req, res, next) => {
	res.send("DELETE /api/auth/profile");
};

export { register, login, getProfile, updateProfile, deleteProfile };
