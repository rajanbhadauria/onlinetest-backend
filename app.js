const express = require("express");
const app = express();
// connecting database
require("./config/database");
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// setting port for nodejs
const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
  return
});
