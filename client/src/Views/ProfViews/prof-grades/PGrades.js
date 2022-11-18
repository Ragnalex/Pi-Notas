import React, { useEffect, useRef, useContext } from "react";
import "./PGrades.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/context"

// IMAGES
import cursos from "../../../imgs/reading-boy.json";

const PGrades = () => {

    const { user, dispatch } = useContext(Context);  

    const navigate = useNavigate();

    return (

        <div>

            <button className="back-button" onClick={() => navigate("/profesor/profile")}> Volver </button>
            
            <div className="content-cursos">

                <div className="cursos-encabezado">
                    <div className="t-profile">
                        Cursos
                    </div>

                    <div className="cursos-infogroup">
                        <div className="cursos-pnombre">
                            {user.pnombre + " " + user.apellidop + " " + user.apellidom}
                        </div>
                        <div className="cursos-pcorreo">
                            {user.correo}
                        </div>
                        <div className="cursos-prut">
                            {user.rut}
                        </div>
                    </div>
                </div>


                <div className="cursos-body">
                    <div className="cursos-list">
                        
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
                    <Lottie animationData={cursos} loop={true} autoPlay ={true}  className="imag-cursos" ></Lottie>
                </div>

                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>

            </div>
            
        </div>
        
    );
};


export default PGrades;