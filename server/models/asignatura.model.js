const mongoose = require("mongoose");

const AsignaturaSchema = new mongoose.Schema({
  idAsignatura: {
    type: String,         //Por ejemplo en la BD esta "MAT2022" correspondiente a matematicas del año 2022
    required: true,
    unique: true
  },

  nombre: {
    type: String,
    required: true
  },
  cursos: [
    [
      {type: mongoose.Types.ObjectId, ref: "Profesor"},
      {type: mongoose.Types.ObjectId, ref: "Curso"}    
    ]
  ]
});

module.exports = mongoose.model("Asignatura", AsignaturaSchema);
