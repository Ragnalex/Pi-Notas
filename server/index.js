const express = require("express");
const cors = require("cors");
const mongodb = require('mongodb');
const morgan = require("morgan");


const app = express();
const pool = require('./database');


//BD Setting
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));


try {
    pool.connect(err => {
        const collection = pool.db("test").collection("devices");
        // perform actions on the collection object
        pool.close();
      });

    app.listen(app.get("port"), () => {
        console.log("server on port", app.get("port"));
    })
} catch (error) {
    console.log(error);
}