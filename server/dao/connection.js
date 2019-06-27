var mysql = require( 'mysql' );

var con = mysql.createConnection({
  //Ignacio's Conection 1
  // host: "192.168.2.201",
  // user: "citt",
  // password: "Citt.2018",

  //Ignacio's Conection 2
  host: "192.168.56.2",
  user: "citt",
  password: "Citt.2018",
  //Jamon's Conection
  // host: "192.168.1.134",
  // user: "weasdf",
  // password: "palito",

  // Yisus's Conection 
  // host: "192.168.96.3",
  // user: "higlord",
  // password: "Alchimis01.",

  database: "veranum",
  acquireTimeout: 1000000

});
module.exports = con;