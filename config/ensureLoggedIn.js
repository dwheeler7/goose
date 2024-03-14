module.exports = (req, res, next) => {
    // Allow access to /auth route without authentication
    if (req.path === '/auth') {
        return next();
    }

    // Check for authentication for other routes
    if (req.user) {
        return next();
    } else {
        res.status(401).json({ msg: 'Unauthorized You Shall Not Pass' });
    }
};