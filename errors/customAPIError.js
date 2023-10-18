const {StatusCodes} = require("http-status-codes");

class customAPIError extends Error{
    constructor (message){
        super(message)
    }
}

class notFoundError extends customAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

class badRequestError extends customAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

class unauthorizedError extends customAPIError{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = {customAPIError, notFoundError, badRequestError, unauthorizedError};