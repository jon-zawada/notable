const mysql = require('mysql');
const connection = mysql.createConnection({
  user     : 'root',
  password : '123',
  database: 'notable'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as mysql as id ' + connection.threadId);
});

module.exports = connection;
