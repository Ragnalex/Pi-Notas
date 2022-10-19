const mongoose = require("mongoose");
const { Schema } = mongoose;

const CursoSchema = new Schema({
  NombreCurso: {
    type: String,
    unique: true,
    required: true,
  },
  año: {
    type: String,
    required: true,
  },
  asignaturas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asignatura",
    },
  ],
  calendario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evento",
    },
  ],
});

module.exports = mongoose.model("Curso", CursoSchema);
