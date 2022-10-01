import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";


//IMG
import imgEducador from "../../imgs/mainImg.svg"

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="bg">
            <div className="container center">

                <div className="tittle">
                    Bienvenido al portal estudiantil π-notas
                </div>

                <body>
                
                <div className="botones">
                    
                    <button  onClick={console.log("funciona")} className="button buttonText">
                        Ingreso estudiantil
                    </button>
                    
                    <button onClick={() => navigate("/profesor/login")} className="button buttonText">
                        Ingreso profesores
                    </button>

                </div>
                
                <img className="img" src = {imgEducador} alt="FondoEducador"/>

                
                </body>
                
                

            </div>
        </div>
        
    );


};


export default Home;