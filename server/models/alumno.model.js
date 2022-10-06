const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
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
  curso:  {
    type: mongoose.Types.ObjectId, refer:"Curso"
  },
  
});
module.exports = mongoose.model("Alumno",AlumnoSchema);