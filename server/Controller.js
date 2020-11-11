const Models = require('./Models');

const add = (req, res) => {
  Models.add((err, data) => {
    if(err) {
      console.log('controller fail')
      res.status(404).send();
    } else {
      console.log('controller sucess')
      res.send(JSON.stringify(data));
    }
  });
};

module.exports = {add};