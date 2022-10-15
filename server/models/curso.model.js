const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
  idCurso:{
    type: String,
    unique: true,
    required: true
  },
  estudiantes:[
    {type: mongoose.Types.ObjectId, ref: "Alumno" }
  ],
  profJefe: {
    type: mongoose.Types.ObjectId, ref: "Profesor"
  },
  calendario: { 
    type: mongoose.Types.ObjectId, ref: "Calendario"
  }
});

module.exports = mongoose.model("Curso", CursoSchema);