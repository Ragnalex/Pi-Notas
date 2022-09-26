import React from "react";
import "./home.css";


//IMG
import imgEducador from "../../imgs/mainImg.svg"

const home = () => {

    return (
        <div className="bg">
            <div className="container center bg">

                <div className="tittle">
                    Bienvenido al portal estudiantil π-notas
                </div>

                <body>
                
                <div className="botones">
                    
                    <button onClick={console.log("funciona")} onClick={console.log("funciona")} className="button buttonText">
                        Ingreso estudiantil
                    </button>
                    
                    <button onClick={console.log("funciona")} className="button buttonText">
                        Ingreso profesores
                    </button>

                </div>
                
                <img className="img" src = {imgEducador} alt="FondoEducador"/>

                
                </body>
                
                

            </div>
        </div>
        
    );


};


export default home;