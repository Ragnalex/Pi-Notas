const express = require("express");
const cors = require("cors");
const mongodb = require('mongodb');



//conexión bd




const app = express();
const pool = require('./database');


app.set("port", process.env.PORT || 5000);



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