import React, { useEffect, useRef } from "react";
import "./eLogin.css";
import Lottie from "lottie-react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

//Images

import sefirot from "../../imgs/Ellipse.png";
import student from "../../imgs/reading-boy.json";

const ELogin = () => {

    const navigate = useNavigate();
    const rutRef = useRef();            // variable que almacenara el rut que se ingresara

    const formatRut = (rut) => { // Da formato al rut para posterios validacion con el backend
        const newRut = rut.replace(/\./g, '').replace(/\-/g, '').trim().toLowerCase();
        const lastDigit = newRut.substr(-1, 1);
        const rutDigit = newRut.substr(0, newRut.length - 1)
        let format = '';
        for (let i = rutDigit.length; i > 0; i--) {
            const e = rutDigit.charAt(i - 1);
            format = e.concat(format);
            if (i % 3 === 0) {
                format = '.'.concat(format);
            }
        }
        return format.concat('-').concat(lastDigit);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rut = formatRut(rutRef.current.value);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/alumno/ingreso", {
                rut: rut,
            });
            alert("Alumno " + res.data.pnombre + " " + res.data.apellidop + " detectado con " + res.data.rut);
        } catch (error) {
            console.log(error);
            alert("Rut ingresado no esta en el sistema.");
        };
    };


    return (
        <div>
            <button className="back-button" onClick={() => navigate("/")}> Regresar </button>
            <div className="content">
                <Lottie animationData={student} loop={true} autoPlay={true} className="imag"></Lottie>

                <div className="body">
                    <div className="titulo t-login">
                        Ingreso Estudiantil
                    </div>

                    <form className="formBox" onSubmit={handleSubmit}>
                        <label className="l-elogin"> Revise sus calificaciones
                            y calendarización de sus asignaturas </label>
                        <input className="input-box" 
                                type="text" 
                                placeholder="12.345.678-9" 
                                ref={rutRef} 
                                >
                        </input>
                        
                            <button className="submit" type="submit"> Iniciar Sesión </button>

                    </form>
                    
                </div>
                <img className="nubesita" src={sefirot} alt="FondoEducador" />
            </div>
        </div>
    );
}

export default ELogin;