const handleErrors = function(err,req,res,next){
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({error:message})
}

module.exports = {handleErrors}