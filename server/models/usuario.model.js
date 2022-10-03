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
  profesor: {type: mongoose.Types.ObjectId, ref: "Profesor" 
  },
  alumno: {type: mongoose.Types.ObjectId, ref: "Alumno" 
  },
  administrador: {type: mongoose.Types.ObjectId, ref: "Administrador" 
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
