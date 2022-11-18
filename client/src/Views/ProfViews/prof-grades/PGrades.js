import React, { useEffect, useRef } from "react";
import "./PGrades.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

// IMAGES
import cursos from "../../../imgs/reading-boy.json";

const PGrades = () => {

    const navigate = useNavigate();

    return (

        <div>

            <button className="back-button" onClick={() => navigate("/profesor/profile")}> Volver </button>
            
            <div className="content-cursos">
                <div className="encabezado">
                    <div className="t-profile">
                        Cursos
                    </div>

                    <div className="info-group">
                        <div className="p-nombre">
                            Juanito Alcachofa
                        </div>
                        <div className="p-correo">
                            juanito@profesor.cl
                        </div>
                        <div className="p-rut">
                            12.345.678-9
                        </div>
                    </div>
                </div>


                <div className="content-imag">
                    <div className="class-group">
                        <button onClick={() => navigate("/profesor/notas")} className="home-button">
                            Séptimo A
                        </button>

                        <button onClick={() => navigate("/profesor/notas")} className="home-button">
                            Séptimo B
                        </button>

                        <button onClick={() => navigate("/profesor/notas")} className="home-button">
                            Séptimo C
                        </button>

                        
                    </div>
                    <Lottie animationData={cursos} loop={true} autoPlay ={true}  className="imag" ></Lottie>
                </div>

                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
            
        </div>
        
    );
};


export default PGrades;