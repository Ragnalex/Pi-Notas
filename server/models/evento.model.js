const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    unique: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Evento", EventoSchema);
