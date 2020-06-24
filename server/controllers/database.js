const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'the-void',
        user: 'damassa',
        password: '3003',
        charset: 'utf8'
    });

// eslint-disable-next-line eqeqeq
if (connection.state != 'authenticated')
    connection.connect();

module.exports = {
    connection: connection
}