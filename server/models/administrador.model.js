const mongoose = require("mongoose");

const AdministradorSchema = new mongoose.Schema({
  correo: {
    type: String,
    require: true,
    unique: true,
  },
  contraseña: {
    type: String,
    require: true,
  },
  Cargo:{
    type: string,
    require: true
  }
});

module.exports = mongoose.model("Administrador", AdministradorSchema);
