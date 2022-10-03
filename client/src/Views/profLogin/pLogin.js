import React, { useEffect, useRef } from "react";
import "./pLogin.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";


//IMAGES

import educator from "../../imgs/educatorAnim.json";
import sefirot from "../../imgs/Ellipse.png";

const PLogin = () => {

    const navigate = useNavigate();

    return (
        <div>

            <button className="back-button" onClick={() => navigate("/")}> Regresar </button>
            <div className="content">

            
                <div className="body">

                    <div className="titulo t-login">
                        Ingreso Profesores
                    </div>

                    <form className="formBox">
                        <label className="label"> Correo Institucional </label>
                        <input className="input-box" type="text" placeholder="profesor@colegio.cl"></input>

                        <label className="label">Contraseña</label>
                        <input className="input-box" type="password" placeholder="***********"></input>

                        <button onClick={() => navigate("/profesor/profile")} className="submit"> Iniciar sesión </button>
                    </form>
                    

                </div>

                <Lottie animationData={educator} loop={true} autoPlay ={true}  className="imag" ></Lottie>

            
            
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
            
            
            
            

        </div>
        



        


    );
}


export default PLogin;