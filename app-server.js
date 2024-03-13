const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const usersRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const commentsRouter = require('./routes/api/comments');
// const checkTokenMiddleware = require('./config/checkToken');
// const ensureLoggedInMiddleware = require('./config/ensureLoggedIn');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.locals.data = {};
    next();
});
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(checkTokenMiddleware);
app.use('/api/users', usersRouter);

// app.use(ensureLoggedInMiddleware);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
