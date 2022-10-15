import React, { useEffect, useRef } from "react";
import "./PGrades.css";
import Lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

// IMAGES
import sefirot from "../../imgs/Ellipse.png";

const PGrades = () => {

    const navigate = useNavigate();

    return (

        <div>

            <button className="back-button" onClick={() => navigate("/profesor/profile")}> Regresar </button>
            
            <div className="p-content">
                <div className="encabezado">
                    <div className="titulo t-profile">
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

                <div className="b-profile">
                    <div className="class-group">
                        <button className="home-button">
                            Séptimo A
                        </button>

                        <button className="home-button">
                            Séptimo B
                        </button>

                        <button className="home-button">
                            Séptimo C
                        </button>
                    </div>

                </div>
                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
            
        </div>
        
    );
};


export default PGrades;