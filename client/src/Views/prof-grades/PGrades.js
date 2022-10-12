import React, { useEffect, useRef } from "react";
import "./PGrades.css";
import Lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

// 
import educator from "../../imgs/educatorAnim.json";

const PGrades = () => {

    const navigate = useNavigate();

    return (

        <div>

            <button className="back-button" onClick={() => navigate("/profesor/profile")}> Regresar </button>
            
            <div>
                
                <div className="info-profesor"> 
                    <h4>  Nombre  </h4>              
                    <h4>  Rut  </h4>
                    <h4>  Email  </h4>
                </div>
                <div className="titulo-cursos">
                    Cursos de la Asignatura
                </div>

                <div className="info-cursos">
                    Septimo A
                </div>
                
                <div className="info-cursos">
                    Septimo B
                </div>

                <div className="info-cursos">
                    Septimo C
                </div>

            </div>

            
        </div>
    );
};


export default PGrades;