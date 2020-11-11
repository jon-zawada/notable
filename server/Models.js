const db = require('../db/index');

const add = (callback) => {
  db.query('SELECT 1 + 2 AS solution', (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {add}