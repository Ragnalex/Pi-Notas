const mongoose = require("mongoose");

const CalendarioSchema = new mongoose.Schema({
    idCalendar: {                      //Por ejemplo el de la bd "CAL1MA2022" correspondiente al CALendario del 1ero Medio A del año 2022
        type: String,
        require: true,
        unique: true
    },
    eventos: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Evento"
    }
    ]

})

module.exports = mongoose.model("Calendario", CalendarioSchema);