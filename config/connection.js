// mysql database connection

const mysql = require('mysql');
let connection;

// Setup for Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    // We are not using it so localhost
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers"
    });
};
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports= connection;