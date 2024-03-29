import React, { useContext, useRef } from "react";
import "./admLogin.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/context";
import axios from "axios"


//IMAGES

import educator from "../../../imgs/educatorAnim.json";
import sefirot from "../../../imgs/Ellipse.png";

const PLogin = () => {

    const { dispatch, isFetching } = useContext(Context);
    const navigate = useNavigate();
    const correoRef = useRef();
    const passRef = useRef();

    const handleSubmit = async (e) => {             //Funcion para comprobar el login (conexion con el backend)
        e.preventDefault();
        dispatch ( { type: "LOGIN_START" } );
        try {
            const res = await axios.post("http://localhost:5000/api/auth/admin/ingreso", {
                correo: correoRef.current.value,
                contrasena: passRef.current.value
            });

            if (res.data.correo == null){
                dispatch ( {type: "LOGIN_FAILURE"} );
                alert(res.data);            //Devuelve el mensaje fallido enviado desde el backend
                return;
            }
            dispatch ( {type: "LOGIN_SUCCESS", payload: {...res.data} } );
            alert("Datos ingresados encontrados: " + res.data.correo + " cargo: " + res.data.cargo);       //Si llega hasta aca (pasa el if), es que encontro los datos y estan bien
            
            navigate(`/administrador/inicio`);
            
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
                        Ingreso Administrador
                    </div>

                    <form className="admL-formBox" onSubmit={handleSubmit}>
                        <label className="admL-label"> Correo administrador </label>
                        <input className="input-box" type="text" placeholder="administrador@colegio.cl" ref={correoRef}></input>

                        <label className="admL-label">Contraseña</label>
                        <input className="input-box" type="password" placeholder="***********" ref={passRef}></input>

                        <button className="submit" type="submit"> Iniciar sesión </button>
                    </form>
                    

                </div>

            
            
            </div>
            
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            
            
            
            

        </div>
        



        


    );
}


export default PLogin;