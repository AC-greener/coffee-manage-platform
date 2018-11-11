var createError = require('http-errors')
    ,express = require('express')
    ,path = require('path')
    ,cookieParser = require('cookie-parser')
    ,logger = require('morgan')
    ,viewsRouter = require('./routes')
    ,postRouter = require('./routes/postApi/index')
    ,getRouter = require('./routes/getApi/index')

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);
app.use('/getapi', getRouter);
app.use('/postapi', postRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// supervisor ./bin/www