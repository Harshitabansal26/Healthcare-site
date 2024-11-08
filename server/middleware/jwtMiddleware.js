// const jwt = require('jsonwebtoken');

// const createToken = jwt.sign(payload,process.env.PRIVATE_KEY,(err,token)=>{
//     if(err){
//         console.error("INVALID: ",err.message)
//     }
//     else{
//         console.log(token);
//     }
// })

// const validateToken =  jwt.verify(token,process.env.PRIVATE_KEY);

// jwt.verify(token,process.env.PRIVATE_KEY,function(err,decoded){
//     console.log(decoded.foo);
// });

// try{
//     var decoded = jwt.verify(token.'wrong-secret');
// }
// catch(err){

// }


var jwt = require('jsonwebtoken');
const generateToken=(userData)=>{
    // in this fxn we are creating a fresh JWT token to provide user, for Login/Session management or for authorization purpose.
    return jwt.sign(userData, process.env.PRIVATE_KEY, { expiresIn: '1h' });
}

const validateJwtToken = (req,res,next)=>{
// Firt we are checking that jwt token is available or not . 
    const authorization = req.headers.authorization  ;

    //OUTPUT 1 : bearer sdfgh
    //OUTPUT 2 : asdf
    //OUTPUT 3:
    //OUTPUT 4 : token is not created , local ho ya endpoint testing se bheja ho , without token header send kiya h

    if(!authorization){
        return res.status(401).json
        ({err:'Token not available'})
    }
// we are storing the token value from headers and splitting to get "bearer sdfgh" to ""
    const token = authorization.split(' ')[1]

    // token provided is wrong throw the error msg
    if(!token){
        return res.status(401).json
        ({err  : 'Unauthorized User'});
    }

    try{
        // in this error handler try catch : we are handling , if token is validated or verified , then move to next middleware or respond back to client.
        const validateToken = jwt.verify(token,process.env.PRIVATE_KEY);

        req.user = validateToken;
        next();
    }

    catch(err){
        console.error("Error Ocuured : " , err.message);
        return res.status(401).json({ err: 'Invalid or expired token' });
    }
};

module.exports = {generateToken,validateJwtToken};