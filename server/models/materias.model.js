const mongoose = require("mongoose");

const MateriaSchema = new mongoose.Schema({
  nombre:  {
    type: String,
    require: true,
  },
  curso:  {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Materia", MateriaSchema);
