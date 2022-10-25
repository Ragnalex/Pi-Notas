import React, { useEffect, useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pProfile.css";
import Lottie from "lottie-react";
import { Context } from "../../context/context";
import axios from "axios";

//IMAGES
import sefirot from "../../imgs/Ellipse.png";
import libros from "../../imgs/libros.json";



const PProfile = () => {
    
    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);           //El usuario user contiene todo lo que tiene el profesor (rut, apellidop, apellidom, contrasena, correo, pnombre, snombre)

    const [asignaturas, setAsignaturas] = useState([]);

    const handleLogout = () => {        //Metodo de cierre de sesión para el boton
        dispatch( { type: "LOGOUT"});
        navigate("/")
    }
    
    const updateAsignaturas = async() => {          //Funcion que llama la informacion de las asignaturas del backend
        try {
            const res = await axios.post("http://localhost:5000/api/prof/verAsignaturas", {
                rut: user.rut,
            });
    
            setAsignaturas(res.data);
            
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {updateAsignaturas()}, []);         //Ejecuta por renderizado la funcion

    return(
        
        <div>
            <button onClick={handleLogout} > Cerrar sesion </button>
            
            <div className="p-content">
                
                <div className="encabezado">

                    <div className="t-profile">
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

                        {
                            asignaturas.map((asignatura, index)=> {         //Renderizado de los botones del backend
                                return (
                                <button className="asign-button" key={index}>
                                    {asignatura.asignatura.nombre}
                                </button>
                                )
                            })
                        }
                        {/* <button className="asign-button">
                                    Lenguaje
                        </button>
                        <button className="asign-button">
                                    Matematicas
                        </button>
                        <button className="asign-button">
                                    Ingles
                        </button>
                        <button className="asign-button">
                                    Filosofia
                        </button>
                        <button className="asign-button">
                                    Compu
                        </button>
                        <button className="asign-button">
                                    Religion
                        </button> */}


                    </div>

                    <div>
                        <Lottie animationData={libros} loop={true} autoPlay ={true}  className="imag-p" ></Lottie>
                    </div>

                </div>
                
            </div>
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
        </div>
    );
}

export default PProfile;