const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const Controller = require('./Controller');
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/test', Controller.add);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})