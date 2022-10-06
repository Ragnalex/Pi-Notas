const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
    _id: {              //Por ejemplo el de la bd "PP1LENG022022" correspondiente a la prueba parcial 1 de lenguaje paralelo 2, del año 2022
        type:String,
        require: true,
        unique: true
    },
    descripcion: {
        type: String,
        require: true
    },
    fecha:{
        type: Date,
        require: true
    }

})

module.exports = mongoose.model("Evento",EventoSchema);