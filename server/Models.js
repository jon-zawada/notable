const db = require('../db/index');

const getPhysicians = (callback) => {
  db.query('SELECT * FROM physicians', (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const getPatients = (id, callback) => {
  db.query('SELECT * FROM patients WHERE doctorId = ?', [id], (err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {getPhysicians, getPatients}