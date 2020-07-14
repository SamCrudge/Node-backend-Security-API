const mysql = require('mysql');

const DB = mysql.createConnection({
    host     : '92.204.66.9',
    user     : 'admin',
    password : 'tou3W^{Zm?A%;D',
    database : 'bearupstairs'
});

module.exports = DB