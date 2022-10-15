import React, { useEffect, useRef, useContext, useState } from "react";
import "./pProfile.css";
import Lottie from "lottie-react";
import { Context } from "../../context/context";
import axios from "axios";

//IMAGES
import sefirot from "../../imgs/Ellipse.png";
import libros from "../../imgs/libros.json";



const PProfile = () => {

    const { user } = useContext(Context);           //El usuario user contiene todo lo que tiene el profesor (rut, apellidop, apellidom, contrasena, correo, pnombre, snombre)

    const [asignaturas, setAsignaturas] = useState([]);

    
    const updateAsignaturas = async() => {          //Funcion que llama la informacion de las asignaturas del backend
        try {
            const res = await axios.post("http://localhost:5000/api/prof/profesor/asignatura", {
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

                        {
                            asignaturas.map((asignatura, index)=> {         //Renderizado de los botones del backend
                                return (
                                <button className="home-button" key={index}>
                                    {asignatura.nombre}
                                </button>
                                )
                            })
                        }

                    </div>

                    <div>
                        <Lottie animationData={libros} loop={true} autoPlay ={true}  className="imag-p" ></Lottie>
                    </div>

                </div>
                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
        </div>
    );
}

export default PProfile;