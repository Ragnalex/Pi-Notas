const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfesorSchema = new Schema({
  rut: {
    type: String,
    required: true,
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
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  cursos: [{
    type: mongoose.Types.ObjectId,
    ref: "Curso",
  }],
  asignaturas: [{type: mongoose.Types.ObjectId,
    ref: "Asignatura",
  }],
});

module.exports = mongoose.model("Profesor", ProfesorSchema);
