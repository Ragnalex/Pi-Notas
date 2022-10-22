const mongoose = require("mongoose");

const AdministradorSchema = new mongoose.Schema({
  correo: {
    type: String,
    require: true,
    unique: true,
  },
  contrasena: {
    type: String,
    require: true,
  },
  cargo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Administrador", AdministradorSchema);
