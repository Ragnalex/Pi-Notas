import React, { useEffect, useRef } from "react";
import "./pProfile.css";
import Lottie from "lottie-react";

//IMAGES
import sefirot from "../../imgs/Ellipse.png";
import libros from "../../imgs/libros.json";

const PProfile = () => {
    return(
        <div>
            <div className="p-content">
                <div className="encabezado">

                    <div className="titulo t-profile">
                        Asignaturas
                    </div>

                    <div className="info-group">
                        <div className="p-nombre">
                            Juanito Lechuga Topo
                        </div>
                        <div className="p-correo">
                            juanito.lechuga@profesor.cl
                        </div>
                        <div className="p-rut">
                            11.111.111-1    
                        </div>
                    </div>

                </div>

                <div className="b-profile">
                    <div className="class-group">
                        <button className="home-button">
                            Filosofía
                        </button>

                        <button className="home-button">
                            Lenguaje
                        </button>

                        <button className="home-button">
                            Historia
                        </button>

                        <button className="home-button">
                            Educación Ciudadana
                        </button>
                    </div>

                    <div>
                        <Lottie animationData={libros} loop={true} autoPlay ={true}  className="imag-p" ></Lottie>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PProfile;