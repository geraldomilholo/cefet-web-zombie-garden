var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
  	password : 'root',
  	database : 'zombies',
  	port: 8889,
  	multipleStatements: true
});

connection.connect();

module.exports = connection;
