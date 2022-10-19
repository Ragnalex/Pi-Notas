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
  curso: {
    type: mongoose.Types.ObjectId,
    ref: "Curso",
  },
  notas: [
    {
      asignatura: {type: mongoose.Types.ObjectId,
        ref: "Asignaturas",
      },
      calificacion: {
        type: Number,
        required: true,
      },
      numero: {
        type: Number,
        required: true,
      },
      Ponderacion: {
        type: Number,
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model("Alumno", AlumnoSchema);
