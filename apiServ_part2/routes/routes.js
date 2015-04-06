console.log("connected to routes.js")
// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database("authen.db");
// var bodyParser = require('body-parser');


function routing(app) {
  app.get('/', function(req, res){
    res.render('login.html');
  });

  app.post('/session', function(req, res, next){
    var user = req.body.username;
    var pass = req.body.password;
    console.log(user + " " + pass);
    db.get("SELECT * FROM user WHERE username = ? AND password = ?", user, pass, function(err, row){
      if(err){
        throw err;
        }
      if(row){
        req.session.valid_user = true;
        res.redirect('/alvin');
        //console.log(req.session.valid_user);
      }
        else{
          res.redirect('/');
        }
      });
  });

  app.use(function(req, res, next){
    if(req.session.valid_user){
      next();
    }
    else{
      res.redirect('/');
    }
  });

  app.get('/alvin', function(req, res){
    //if(req.session.valid_user){
      res.render('alvin.html');
    //}
    //else {
      //res.redirect('/');
    //}
  });

  app.get('/alvin2', function(req, res){
    res.render('alvin2.html')
  });

  app.post('/logout', function(req, res){
    req.session.valid_user = false;
    res.redirect('/');
  });

  app.listen("3000", function(){
    console.log("Listening on port 3000");
  });
};

module.exports = routing;
