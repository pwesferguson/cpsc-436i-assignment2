require('./db').initDb();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var messagesRouter = require('./routes/messages');

var app = express();
const port = '8080';
app.listen(port, () => {
  console.log("listening on port ", port);
});

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/messages', messagesRouter);

module.exports = app;
