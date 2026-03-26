// function errorMiddleware(error, _req, res, _next){
//     console.error('Error: ', error)

//     const statusCode = res.statusCode !== 200 ? res.statusCode : 500
//     res.status(statusCode).json({
//         message: error.message || 'Internal server error'
//     })
// }
// export default errorMiddleware

// same same
function errorMidlleware(error, _req, res, _next) {
    console.error('Error:', error);
    
    const status = error.status || 500
    
    res.status(status).json({
        message: error.message || 'Internal server error'
    });
};
export default errorMidlleware;