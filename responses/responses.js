let classes = {
    ResponseError: class ResponseError {
        constructor(error, req) {
            if (!error||!error.stack)
                throw new Error(`Invalid parameter, please send first argument as an Error Object.`)
            this.message = 'Error!';
            if(error.isAxiosError&&error.response&&error.response.data)
            this.message = error.response.data.message;
            else if (error && error.message)
                this.message = error.message;
            this.statusCode = 500;
            this.error = true;
            this.message += req && req.originalUrl ? ` URL: ${req.originalUrl}` : ``;
            this.stack = error.stack
        }
    },
    Response: class Response {
        constructor(message, data) {
            this.statusCode = 200;
            this.error = false;
            this.message = message || `Success!`;
            this.data = data || [];
        }
    }

}

module.exports = { ...classes }