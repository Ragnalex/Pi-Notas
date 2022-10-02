import React, { useEffect, useRef } from "react";
import "./pLogin.css";
import Lottie from "lottie-react";

//IMAGES

import LoginImg from "../../imgs/PLoginImg.svg";
import educator from "../../imgs/educatorAnim.json";
import clouds from "../../imgs/sefirot.json";
import sefirot from "../../imgs/Ellipse.png";

const PLogin = () => {

    const container = useRef(null);

    return (
        <div>

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

                        <button onClick={() => navigate("/profesor/profile")} className="submit"> Login </button>
                    </form>

                </div>

                <Lottie animationData={educator} loop={true} autoPlay ={true}  className="imag" ></Lottie>

            
            
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
            
            
            
            

        </div>
        



        


    );
}


export default PLogin;