const mysql = require('mysql2');

const mysqlConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'test123',
    database: 'ssr_db',
    port: 3306
}

const connection = mysql.createConnection(mysqlConfig);

module.exports = connection;