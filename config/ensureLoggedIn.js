module.exports = (req, res, next ) => {
    console.log(req.user)
    if(req.user) return next()
    res.status('401').json({ msg: 'Unauthorized You Shall Not Pass'})
}