'use strict';

const express = require('express');
const router  =  require('./api');

const app = express();

app.use('/',express.static('public'));


app.use('/api', router);

app.listen(3000, function () {
  console.log("The server is running on port 3000!")
})