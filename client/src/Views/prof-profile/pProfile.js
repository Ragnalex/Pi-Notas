import React, { useEffect, useRef, useContext } from "react";
import "./pProfile.css";
import Lottie from "lottie-react";
import { Context } from "../../context/context";

//IMAGES
import sefirot from "../../imgs/Ellipse.png";
import libros from "../../imgs/libros.json";

const PProfile = () => {

    const { user } = useContext(Context);           //El usuario user contiene todo lo que tiene el profesor (rut, apellidop, apellidom, contrasena, correo, pnombre, snombre)
    

    return(
        <div>
            <div className="p-content">
                <div className="encabezado">

                    <div className="titulo t-profile">
                        Asignaturas
                    </div>

                    <div className="info-group">
                        <div className="p-nombre">
                            {user.pnombre + " " + user.apellidop + " " + user.apellidom}
                        </div>
                        <div className="p-correo">
                            {user.correo}
                        </div>
                        <div className="p-rut">
                            {user.rut}
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