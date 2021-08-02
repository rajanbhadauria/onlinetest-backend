const express = require("express");
const app = express();
global.express = express;

// form data and malitpart from data parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// connecting database
require("./config/database");

// user contoller
const userController = require('./controllers/Users');
app.use(userController);

// serving static folder
app.use(express.static('public'))
// setting port for nodejs
const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
  return
});
