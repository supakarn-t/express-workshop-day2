class NotfoundError extends Error {
	constructor(message) {
		super(message);
		this.name = "Not Found";
		this.status = 404;
	}
}

export default NotfoundError;
