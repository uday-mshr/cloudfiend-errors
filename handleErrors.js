const { NotFoundClientError, RemoteAPIServerError } = require('./responses/error-response');
const messages = require('./messages');
let logger;
if (global && global.logger )
    logger = global.logger;

let functions = {
    unRoutedRouteErrorHandler: function (app) {
        function handleRouteError(error, req, res, next) {
            if (logger&& logger.errorLog)
            logger.errorLog(error, req);
            if (req.xhr) {
                return res.status(500).json({ error: 'Something failed!', });
            }
            console.error(`${error.message}
            ${error.stack}`);
            if (!error.statusCode)
            error.statusCode = 500; // Sets a generic server error status code if none is part of the err
            if (error.shouldRedirect) {
                return res.render(`myErrorPage`); // Renders a myErrorPage.html for the user
            }
            res.status(error.statusCode).json(error); // If shouldRedirect is not defined in our error, sends our original err data

        }
        app.all('*', function (req, res, next) {
            const notFound = new NotFoundClientError(new Error(messages.URL_NOTFOUND), req);
            notFound.shouldRedirect;
            next(notFound);
        });
        app.use(handleRouteError);
    },
    routeFunctionErrorHandler: function (error, req, next, errorClass) {
        if (logger&& logger.errorLog)
           logger.errorLog(error, req);
        if (error.code === 'ECONNREFUSED') {
            error.message += messages.SERVICE_UNAVAILABLE;
        }
        if (!errorClass)
            errorClass = RemoteAPIServerError;
        const errorEntity = new errorClass(error, req);
        next(errorEntity);
    }
}


module.exports = { ...functions };
