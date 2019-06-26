var mysql = require( 'mysql' );

var con = mysql.createConnection({
  //Ignacio's Conection 1
  host: "192.168.2.201",
  user: "citt",
  password: "Citt.2018",

  //Ignacio's Conection 2
  // host: "192.168.56.2",
  // user: "citt",
  // password: "Citt.2018",


  database: "veranum",
  acquireTimeout: 1000000

});
module.exports = con;