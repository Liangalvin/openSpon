var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("authen.db");

db.run("INSERT INTO user (username, password) VALUES (?, ?)",
  'user', 'pass');
