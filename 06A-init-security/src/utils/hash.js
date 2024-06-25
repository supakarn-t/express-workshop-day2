import bcrypt from "bcryptjs";

const pw = "12345";

// เข้ารหัส
const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	// console.log("salt >>", salt);
	const result = await bcrypt.hash(password, salt);
	// console.log("result >>", result);
	return result;
};
// hashPassword(pw);

const comparePassword = async (password, hashPassword) => {
	return bcrypt.compare(password, hashPassword);
};
// comparePassword();

export { hashPassword, comparePassword };
