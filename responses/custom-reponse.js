let {ResponseError}=require('./responses')
let classes={
    SqlCustomError:class SqlCustomError extends ResponseError{
    constructor(message) {    
        super(message);
        this.statusCode = 600;
    }
}
}

module.exports = {
    ...classes
};
