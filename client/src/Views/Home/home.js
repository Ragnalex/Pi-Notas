import React, { useEffect, useRef } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-web";

//IMG
import imgEducador from "../../imgs/mainImg.svg"

const Home = () => {


    const navigate = useNavigate();

    return (
        <div>
            <div className="center">

                <div className="tittle">
                    Bienvenido al portal estudiantil π-notas
                </div>

                <body className="center">
                
                <div className="botones">
                    
                    <button onClick={() => navigate("/estudiante/login")} className="button">
                        Ingreso estudiantil
                    </button>
                    
                    <button onClick={() => navigate("/profesor/login")} className="button">
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