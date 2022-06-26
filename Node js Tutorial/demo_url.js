var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);
console.log(q, "q");
/*The parse method returns an object containing url properties*/
console.log(q.host, "q.host");
console.log(q.pathname, "q.pathname");
console.log(q.search, "q.search");
console.log(q.query, "q.quary");

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month, "qdata.month");