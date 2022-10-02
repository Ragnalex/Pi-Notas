const mongoose = require("mongoose");
const ProfesorSchema = require("./profesor.model");
const AlumnoSchema = require("./alumno.model");
const AdministradorSchema = require("./administrador.model");

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
    type: ProfesorSchema,
  },
  alumno: {
    type: AlumnoSchema,
  },
  administrador: {
    type: AdministradorSchema,
  },
});

module.exports = mongoose.model("Usuario",UsuarioSchema);