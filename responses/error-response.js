let { ResponseError } = require('./responses')
let classes = {
    NotFoundClientError: class NotFoundClientError extends ResponseError {
        constructor(error, req) {
            super(error, req);
            this.statusCode = 404;
        }
    },
    RemoteAPIServerError: class RemoteAPIServerError extends ResponseError {
        constructor(error, req) {
            super(error, req);
            this.statusCode = 503;
        }
    },
    UnAuthorizedClientError: class UnAuthorizedClientError extends ResponseError {
        constructor(error, req) {
            super(error, req);
            this.statusCode = 401;
        }
    },
    InternalServerError: class InternalServerError extends ResponseError {
        constructor(error, req) {
            super(error, req);
            this.statusCode = 500;
        }
    },
    BadRequestClientError: class BadRequestClientError extends ResponseError {
        constructor(error, req) {
            super(error, req);
            this.statusCode = 400;
        }
    }
}
module.exports = {
    ...classes
};
