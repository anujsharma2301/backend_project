class ApiError extends console.error{
    constructor(
        statuscode,
        message = "something went wrong",
        errors =[],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.date = null
        this.message=message
        this.sucsess  =  false;
        this.errors = errors


        if(statck){
            this.statck=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
};

export{
    ApiError
}