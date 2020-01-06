'use strict';

const successResponses= require('./responses/successful-response');
const customeErrors = require('./responses/custom-reponse');
const errorResponses= require('./responses/error-response');
const errorHandlers = require('./handleErrors');
const messages = require('./messages');
module.exports = {
    ...successResponses,
    ...errorResponses,
    ...customeErrors,
    ...errorHandlers,
    messages,
}