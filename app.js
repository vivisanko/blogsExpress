const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const blogsRouter = require('./routes/blogs');
// const notfoundRouter = require('./routes/notfound');


const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
})
// console.log('db',db);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('combined', {
  stream: accessLogStream
}));

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blogs', blogsRouter);
app.use('*', indexRouter);



// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;