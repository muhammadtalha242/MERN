class HttpError extends Error{
    constructor(message, errorCode){
        super(message); //This will add message property
        this.code = errorCode ; //This will add code property
    }

}

module.exports = HttpError