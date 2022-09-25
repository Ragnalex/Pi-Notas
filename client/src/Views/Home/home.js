import React from "react";
import "./home.css";


//IMG
import imgEducador from "../../imgs/mainImg.svg"

const home = () => {

    return (
        <bg className="bg">
        <div className="container center bg">
            <tittle className="tittle">
                Bienvenido al portal estudiantil π-notas
            </tittle>
            <body>
            
            <buttons className="botones">
                <button className="button buttonText">
                    Ingreso estudiantil
                </button>
                
                <button className="button buttonText">
                    Ingreso profesores
                </button>
            </buttons>
            
            <img className="img" src = {imgEducador} alt="FondoEducador"/>

            
            </body>
            
            

        </div>
        </bg>
        
    );


};


export default home;