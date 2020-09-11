// DB Connection

const mysql = require('mysql');
require("dotenv").config();

const DB = mysql.createConnection({
    host     : process.env.DBHOST,
    user     : 'admin',
    password : process.env.DBPASS,
    database : 'bearupstairs'
});

module.exports = DB