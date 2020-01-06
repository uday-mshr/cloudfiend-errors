# Project: Cloudfiends-errors
The project [cloudfiends-errors](https://github.com/uday-mshr/cloudfiend-errors.git) includes all the custom errors which we need in our back-end APIs.

## List of custom errors
Below is the list of all erros with their description.

* [SQLError] - throw this error when there is error related to sql.
* [RemoteAPIError] - throw this error when there is error related to remote api call or remote service is available.
* [NotAuthorizedError] - throw this error when a logged in user does not have authorization to access protected APIs.
* [NotFoundError] - throw this error when a resource is not found.
* [InternalServerError] - throw this error when any server's crash happens.
* [BadRequestError] - throw this error when passed parameters are missed.
