const mongoose = require("mongoose");
const Profesor = require("./profesor.model");
const Alumno = require("./alumno.model");
const Administrador = require("./admin.model");

const UsuarioSchema = new mongoose.Schema({
  rut: {
    type: String,
    require: true,
    unique: true,
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
  profesor: {
    type: Profesor.schema,
  },
  alumno: {
    type: Alumno.schema,
  },
  administrador: {
    type: Administrador.schema,
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
