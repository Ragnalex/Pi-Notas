const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
  curso:  {
    type: String,
    require: true,
  },
  notas: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Notas",
    },
  ],
});
module.exports = mongoose.model("Alumno",AlumnoSchema);