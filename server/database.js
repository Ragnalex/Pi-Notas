const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => console.log("BD esta conectada"))
  .catch((err) => console.error(err));

/*Para conectarse a la bd y modificarla es utilizando el comando :
    
        mongosh "mongodb+srv://pinotasbd.3cgvcac.mongodb.net/PiNotasBD" --apiVersion 1 --username pymentor
        en el cmd despues de colocar el path de la variable de entorno
        la pass es Omeme1G3m13CxnDM (fue generada automatica)

    */
