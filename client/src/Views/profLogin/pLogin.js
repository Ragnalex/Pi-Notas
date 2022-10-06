import React, { useEffect, useRef } from "react";
import "./pLogin.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


//IMAGES

import educator from "../../imgs/educatorAnim.json";
import sefirot from "../../imgs/Ellipse.png";

const PLogin = () => {

    const navigate = useNavigate();
    const correoRef = useRef();
    const passRef = useRef();

    const handleSubmit = async (e) => {             //Funcion para comprobar el login (conexion con el backend)
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/profesor/ingreso", {
                correo: correoRef.current.value,
                contrasena: passRef.current.value
            });
            if (res.data.rut == null){
                alert(res.data);            //Devuelve el mensaje fallido enviado desde el backend
                return;
            }

            alert("Datos ingresados encontrados: " + res.data.correo + " a rut de :" + res.data.rut);       //Si llega hasta aca (pasa el if), es que encontro los datos y estan bien

            
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div>

            <button className="back-button" onClick={() => navigate("/")}> Regresar </button>
            <div className="content">

            
                <div className="body">

                    <div className="titulo t-login">
                        Ingreso Profesores
                    </div>

                    <form className="formBox" onSubmit={handleSubmit}>
                        <label className="label"> Correo Institucional </label>
                        <input className="input-box" type="text" placeholder="profesor@colegio.cl" ref={correoRef}></input>

                        <label className="label">Contraseña</label>
                        <input className="input-box" type="password" placeholder="***********" ref={passRef}></input>

                        <button className="submit" type="submit"> Iniciar sesión </button>
                    </form>
                    

                </div>

                <Lottie animationData={educator} loop={true} autoPlay ={true}  className="imag" ></Lottie>

            
            
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
            
            
            
            

        </div>
        



        


    );
}


export default PLogin;