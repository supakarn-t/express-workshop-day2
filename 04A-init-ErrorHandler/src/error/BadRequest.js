class BadRequestError extends Error {
	constructor(message) {
		super(message);
		this.name = "Bad Requesta";
		this.status = 400;
	}
}

export default BadRequestError;
