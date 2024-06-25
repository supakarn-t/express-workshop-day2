import path from "path";
import { fileURLToPath } from "url";

// const notFoundMiddleware = (req, res, next) => {
// 	res.status(404).json({ message: "resource not found in this server" });
// };

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

export default (req, res, next) => {
	res.status(404).sendFile(path.join(__dirName, "../../public/404.html"));
};

// export default notFoundMiddleware;
