const mongoose = require("mongoose");

const AsignaturaSchema = new mongoose.Schema({
  _id: {
    type: String,         //Por ejemplo en la BD esta "MAT012022" correspondiente a matematicas, paralelo 1 del año 2022
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  cursos: [
    [
      {type: mongoose.Types.ObjectId, ref: "Curso"},
      {type: mongoose.Types.ObjectId, ref: "Profesor"}
    ]
  ]
});
module.exports = mongoose.model("Asignatura", AsignaturaSchema);
