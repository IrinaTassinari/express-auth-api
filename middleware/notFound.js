 
function notFound(req,res,_next){
    res.status(404).json({
        error: `Маршрут ${req.method} ${req.originalUrl} не найден`
    })
}
export default notFound