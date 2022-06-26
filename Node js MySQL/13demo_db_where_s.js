var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  /*Select all customers where the address starts with an "S":*/
  con.query("SELECT * FROM customers WHERE address LIKE 'Sk%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
