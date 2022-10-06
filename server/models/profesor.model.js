const mongoose = require("mongoose");

const ProfesorSchema = new mongoose.Schema({
  rut:{
    type: String,
    required: true,
    unique: true
  },
  pnombre: {
    type: String,
    required: true,
  },
  snombre: {
    type: String,
    required: true,
  },
  apellidop: {
    type: String,
    required: true,
  },
  apellidom: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  contrasena:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Profesor", ProfesorSchema);
