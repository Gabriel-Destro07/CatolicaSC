var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); 
const flash = require('connect-flash'); 

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');

var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(session({
secret: process.env.SESSION_SECRET || 'ajuda',
resave: false,
saveUninitialized: false,
cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 dia
}));
app.use(flash());
app.use((req, res, next) => {
res.locals.messages = req.flash();
next();
});

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const sequelize = require('./config/database'); //entra config pega database | testa a conexao com o MySQL
sequelize.sync({alter:true})
.then( () => console.log('sincronia realizada') )
.catch( err => console.error('erro de sincronia', err) );

sequelize.authenticate()
.then( ()=> console.log('conexão com MySQL ok!'))
.catch( err => console.error('erro de conexão',err) );



module.exports = app;
