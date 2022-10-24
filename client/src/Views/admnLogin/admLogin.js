import React, { useContext, useEffect, useRef } from "react";
import "./admLogin.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import axios from "axios"


//IMAGES

import educator from "../../imgs/educatorAnim.json";
import sefirot from "../../imgs/Ellipse.png";

const PLogin = () => {

    const { dispatch, isFetching } = useContext(Context);
    const navigate = useNavigate();
    const correoRef = useRef();
    const passRef = useRef();

    const handleSubmit = async (e) => {             //Funcion para comprobar el login (conexion con el backend)
        e.preventDefault();
        dispatch ( { type: "LOGIN_START" } );
        try {
            const res = await axios.post("http://localhost:5000/api/auth/profesor/ingreso", {
                correo: correoRef.current.value,
                contrasena: passRef.current.value
            });
            if (res.data.rut == null){
                dispatch ( {type: "LOGIN_FAILURE"} );
                alert(res.data);            //Devuelve el mensaje fallido enviado desde el backend
                return;
            }

            dispatch ( {type: "LOGIN_SUCCESS", payload: {...res.data} } );
            alert("Datos ingresados encontrados: " + res.data.correo + " a rut de :" + res.data.rut);       //Si llega hasta aca (pasa el if), es que encontro los datos y estan bien
            const ruturl = res.data.rut.replace(/\./g, '').replace(/\-/g, '').trim().toLowerCase();
            //navigate(`/profesor/profile/${ruturl}`, {rut:ruturl});
            navigate(`/profesor/profile/`);
            
        } catch (error) {
            console.log(error);
            dispatch ( {type: "LOGIN_FAILURE"} );
        };
    };

    return (
        <div>

            <button className="back-button" onClick={() => navigate("/")}> Regresar </button>
            <div className="admL-content">

            
                <div className="admL-body">

                    <div className="titulo t-login">
                        Ingreso Profesores
                    </div>

                    <form className="admL-formBox" onSubmit={handleSubmit}>
                        <label className="admL-label"> Correo Institucional </label>
                        <input className="input-box" type="text" placeholder="profesor@colegio.cl" ref={correoRef}></input>

                        <label className="admL-label">Contraseña</label>
                        <input className="input-box" type="password" placeholder="***********" ref={passRef}></input>

                        <button className="submit" type="submit"> Iniciar sesión </button>
                    </form>
                    

                </div>

                <Lottie animationData={educator} loop={true} autoPlay ={true}  className="imag" ></Lottie>

            
            
            </div>
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            
            
            
            

        </div>
        



        


    );
}


export default PLogin;