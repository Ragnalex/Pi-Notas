import React, { useEffect, useRef} from "react";
import "./eLogin.css";
import Lottie from "lottie-react";

//Images

import sefirot from "../../imgs/Ellipse.png";
import student from "../../imgs/reading-boy.json";

const ELogin = () => {
    const container = useRef(null);
    return (
        <div>
            <div className="content">
                <Lottie animationData={student} loop={true} autoPlay ={true} className="imag"></Lottie>

                <div className="body">
                    <div className="titulo t-login">
                        Ingreso Estudiantil
                    </div>

                    <div className="formBox">
                        <label className="label l-elogin"> Revise sus calificaciones
                        y calendarización de sus asignaturas </label>
                        <input className="input-box" type="text" placeholder="12.345.678-9"></input>

                        <button className="submit"> Login </button>
                    </div>
                </div>
                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
        </div>
    );
} 

export default ELogin;