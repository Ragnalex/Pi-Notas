import "./adminProf.css" //CSS
import axios from "axios"; //middleware

import React, { useEffect, useRef, useContext, useState } from "react";
import Popup from "reactjs-popup";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../context/context";

//IMAGES
import sefirot from "../../../imgs/Ellipse.png";
import editIco from "../../../imgs/icons/editIco.svg"


const AdmnProf = () => {

    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    {/*const [profesores, setProfesores] = useState([]);*/}

    return (
        <div>
            <div className="admn-acontent">
        
                <div className="t-profile">
                    Gestión de Profesores
                </div>

                {/*Sección que muestra los botones de agregar y borrar profesores */}
                <div className="admn-topButtons">
                    {/*Ventana de ingreso de profesor a agregar */}
                    <Popup trigger={<button className="admn-addbutton"> Añadir Profesor </button>} modal>
                        <div className="admn-test">

                            <div className="admn-poptitle">
                                Añadiendo profesor
                            </div>

                            {/*--- AGREGAR onSubmit={AddProfesor} --- */}
                            <form className="admn-form">
                                <label className="admn-label">
                                    Ingrese nombre de profesor
                                </label>

                                {/*--- AGREGAR ref={newProfesor} --- */}
                                <input className="admn-input" type="text" placeholder="Juan..."></input>

                                <button type="submit" className="admn-submit"> Añadir </button>
                            </form>

                        </div>
                    </Popup>

                    <button className="admn-delbutton"> Eliminar profesor</button>

                </div>

                {/*Sección que muestra listado de profesores */}
                <div className="admn-listAsignaturas">
                    {/*
                        Profesores.map((profesores, index) => {
                            return (
                                <div className="admn-filaAsignatura">
                                    <div className="admn-asignatura">
                                        {profesor.nombre}
                                    </div>

                                    <button className="admn.editIco"><img src={editIco}></img></button>
                                </div>
                            )
                        })
                    */}
                </div>
            </div>
        </div>
    );
}

export default AdmnProf;