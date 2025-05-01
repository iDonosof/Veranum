var mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asd123asd",
    port: 3306,
    database: "VERANUM",
});

module.exports = con;
