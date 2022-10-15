const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const adminRoute = require("./routes/admin.routes");
const authRoute = require("./routes/auth.routes");
const profRoute = require("./routes/prof.routes");


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
app.use("/api/admin/",adminRoute);
app.use("/api/auth/", authRoute);
app.use("/api/prof/", profRoute);

//server is listening
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
