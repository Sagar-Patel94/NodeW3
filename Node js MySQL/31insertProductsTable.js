var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO products (name) VALUES ?";
  var values = [
      ['Chocolate Heaven'],
      ['Tasty Lemons'],
      ['Vanilla Dreams'],
  ]
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result, "result");
    console.log("Number of records inserted: " + result.affectedRows);
  });
});