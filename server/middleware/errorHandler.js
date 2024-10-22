const { constants } = require("../constants");
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    // 500 IS FOR SERVER ERROR

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title :" Validation Failed",
                message : err.message ,
                stackTrace : err.stack,
            });

            break;

        case constants.NOT_FOUND:
            res.join({
                title :"Not Found",
                message : err.message,
                stackTrace: err.stack,
            });

            case constants.UNAUTHORIZED:
                res.join({
                    title :"Unauthorized",
                    message : err.message,
                    stackTrace: err.stack,
                });

            case constants.SERVER_ERROR:
            res.join({
                title :"Seerver Error",
                message : err.message,
                stackTrace: err.stack,
            });

        default :
        console.log("No error , All Good!!");
        break;
    }
};

module.exports = errorHandler;