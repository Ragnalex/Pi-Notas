const mongoose = require("mongoose");
const { Schema } = mongoose;

const AsignaturaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Asignatura", AsignaturaSchema);
