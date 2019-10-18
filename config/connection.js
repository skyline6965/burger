// Require mysql
var mysql = require("mysql");


// Set up our connection information
var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
