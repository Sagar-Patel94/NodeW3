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
  var sql = "INSERT INTO users (name, favorite_product) VALUES ?";
  var values = [
      ['Jhon', '154'],
      ['Peter', '154'],
      ['Amy', '155'],
      ['Hannah',''],
      ['Michael','']
  ]
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result, "result");
    console.log("Number of records inserted: " + result.affectedRows);
  });
});