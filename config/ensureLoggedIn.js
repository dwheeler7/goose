module.exports = (req, res, next) => {
    // Allow access to all routes under /auth without authentication
    if (req.path.startsWith('/auth')) {
        return next();
    }

    // Check for authentication for other routes
    if (req.user) {
        return next();
    } else {
        res.status(401).json({ msg: 'Unauthorized You Shall Not Pass' });
    }
}
