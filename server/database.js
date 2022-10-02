const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => console.log("BD esta conectada"))
  .catch((err) => console.error(err));

