var mysql = require( 'mysql' );

var con = mysql.createConnection({
  //Ignacio's Conection
  host: "192.168.2.201",
  user: "citt",
  password: "Citt.2018",

  //Jamon's Conection
  host: "192.168.1.134",
  user: "weasdf",
  password: "palito",

  database: "veranum",
  acquireTimeout: 1000000

});
module.exports = con;