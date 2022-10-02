const express = require("express");
const cors = require("cors");
const mongodb = require('mongodb');
const morgan = require("morgan");

//Initialization
const app = express();
require('./database');


//Settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes


//server is listening
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
