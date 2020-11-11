const Models = require('./Models');

const getPhysicians = (req, res) => {
  Models.getPhysicians((err, data) => {
    if(err) {
      res.status(404).send();
    } else {
      res.send(data);
    }
  });
};

const getPatients = (req, res) => {
  let {id} = req.params;
  Models.getPatients(id, (err, data) => {
    if(err) {
      res.status(404).send();
    } else {
      res.send(data);
    }
  })
}

module.exports = {getPhysicians, getPatients};