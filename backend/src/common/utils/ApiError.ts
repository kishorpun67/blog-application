class ApiError extends Error {
    public statusCode: number;
    public errors:any;
    public data : null;
    public success : Boolean
    constructor(
        message:string,
        statusCode:number,
        error = [],
        stack =""
    ) {
        super(message)
        this.statusCode  = statusCode
        this.message = message
        this.errors = error
        this.data  = null
        this.success = false
        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}