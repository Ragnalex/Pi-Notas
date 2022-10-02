import React, { useEffect, useRef} from "react";
import "./eLogin.css";
import Lottie from "lottie-react";

//Images

import sefirot from "../../imgs/Ellipse.png";

const ELogin = () => {
    const container = useRef(null);
    return (
        <div>
            <div className="content">
                {/* Poner imagen aquí */}
                <div className="body">
                    <div className="titulo t-login">
                        Ingreso Estudiantes
                    </div>

                    <div className="formBox">
                        <p className="p-login"> Revise sus calificaciones
                        y calendarización de sus asignaturas </p>
                        <input className="input-box" type="text" placeholder="Ej. 12.345.678-9"></input>

                        <button className="submit"> Login </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default ELogin;