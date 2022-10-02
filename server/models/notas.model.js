const mongoose = require("mongoose");

const NotasSchema = new mongoose.Schema({
  materia:{ type: mongoose.Types.ObjectId, ref: "Materias" },
  calificación:  Number,
  ponderación: number,
});
module.exports = mongoose.model("Notas",NotasSchema);