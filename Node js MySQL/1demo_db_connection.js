var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",

  user: "root",
  password: "123456"
});

con.connect(function(err) {
  if (err) {
      console.log("Error", err.message)
  } else {
      console.log("Connected!");
  }
});