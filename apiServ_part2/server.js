console.log("connected to server.js");
var express = require('express');
var session = require('express-session');
var secret = require('./secret.json');
var bodyParser = require('body-parser');
var sqlite3 = require("sqlite3").verbose();
var path = require('path');
var db = new sqlite3.Database("authen.db");
var app = express();
//var authenticate = require('./authenticate.js');
var methodOverride = require('method-override');

app.use(session({
  secret: secret.password,
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//app.use(authenticate);
require('./routes/routes.js')(app);

app.use(methodOverride('_method'));
