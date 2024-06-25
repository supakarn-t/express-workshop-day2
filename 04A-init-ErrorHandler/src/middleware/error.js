const errorMiddleware = (error, req, res, next) => {
	res.status(error.status || 500).json({
		message: "internal error at server",
		error: error.message,
	});
};

export default errorMiddleware;
