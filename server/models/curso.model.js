const mongoose = require("mongoose");
const { Schema } = mongoose;

const CursoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  paralelo:{
    type: String,
    require: true
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
