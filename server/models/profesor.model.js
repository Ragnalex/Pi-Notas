const mongoose = require("mongoose");

const ProfesorSchema = new mongoose.Schema({
  correo: {
    type: String,
    require: true,
    unique: true,
  },
  contraseña: {
    type: String,
    require: true,
  },
  materias: [{ type: mongoose.Types.ObjectId, ref: "Materias" }],
});

module.exports = mongoose.model("Profesor", ProfesorSchema);
