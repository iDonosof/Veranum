var mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asd123asd",
    port: 33060,
    database: "VERANUM",
});

module.exports = con;
