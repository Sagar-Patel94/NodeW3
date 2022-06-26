var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Sagar', 'Junagadh')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    /*Use the result object to get the id:*/
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
