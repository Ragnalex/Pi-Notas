const mongoose = require ("mongoose");


    const uri = "mongodb://uj8rewhbz13umiwutnsw:vHLtdUQVPeWulehQBGQe@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bpqb572dmjti5b6?replicaSet=rs0";
    //uri es el link de conexion a la bd
    mongoose.connect(uri)
    .then(db => console.log("BD esta conectada"))
    .catch(err => console.error(err));

    /*Para conectarse a la bd y modificarla es utilizando el comando :
    
        mongosh "mongodb+srv://pinotasbd.3cgvcac.mongodb.net/PiNotasBD" --apiVersion 1 --username pymentor
        en el cmd despues de colocar el path de la variable de entorno
        la pass es Omeme1G3m13CxnDM (fue generada automatica)

    */


