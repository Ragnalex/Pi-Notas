import "./adminProf.css" //CSS
import axios from "axios"; //middleware

import React, { useEffect, useRef, useContext, useState } from "react";
import Popup from "reactjs-popup";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

//IMAGES
import sefirot from "../../../imgs/Ellipse.png";
import editIco from "../../../imgs/trash.svg"


const AdmnProf = () => {

    const [Profesores, setProfesores] = useState([]);
    const [opendelModal, setOpendelModal] = useState(false);
    const closeModal = () => setOpendelModal(false);

    const newProfesor = useRef();
    const navigate = useNavigate();

    const getProfesores = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verProfesores")
            setProfesores(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const addProfesor = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/ingresarProfesor", {
                rut: newProfesor.current.value,
                pnombre: newProfesor.current.value,
                snombre: newProfesor.current.value,
                apellidop: newProfesor.current.value,
                apellidom: newProfesor.current.value,
                correo: newProfesor.current.value,
                contrasena: newProfesor.current.value
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (profesor) => {
        try {
            const res = axios.post("http://localhost:5000/api/admin/eliminarProfesor", {
                rut: profesor._rut
            })
            alert(profesor.pnombre + " " + profesor.apellidop + " ha sido eliminado exitosamente");
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getProfesores() }, []);

    return (
        <div className="admn-asignall">
            <div className="admn-acontent">
        
                <div className="admn-top">
                    <div className="t-profile">
                        Gestión de Profesores
                    </div>

                    <button onClick={() => navigate("/administrador/inicio")} className="back-button"> Volver </button>
                </div>

                {/*Sección que muestra los botones de agregar y borrar profesores */}
                <div className="admn-topButtons">
                    {/*Ventana de ingreso de profesor a agregar */}
                    <Popup trigger={<button className="admn-addbutton"> Añadir Profesor </button>} modal>
                        <div className="admn-test">

                            <div className="admn-poptitle">
                                Añadiendo profesor
                            </div>

                            <form className="admn-form" onSubmit={addProfesor}>

                                {/*Ingreso de información del profesor */}
                                <label className="admn-label">
                                    RUT
                                </label>
                                <input className="admn-input" type="text" placeholder="12.345.678-9" ref={newProfesor}></input>

                                <label className="admn-label">
                                    Primer Nombre
                                </label>
                                <input className="admn-input" type="text" placeholder="Juan..." ref={newProfesor}></input>

                                <label className="admn-label">
                                    Segundo Nombre
                                </label>
                                <input className="admn-input" type="text" placeholder="Pedro..." ref={newProfesor}></input>

                                <label className="admn-label">
                                    Apellido Paterno
                                </label>
                                <input className="admn-input" type="text" placeholder="Pérez..." ref={newProfesor}></input>

                                <label className="admn-label">
                                    Apellido Materno
                                </label>
                                <input className="admn-input" type="text" placeholder="Pérez..." ref={newProfesor}></input>

                                <label className="admn-label">
                                    correo
                                </label>
                                <input className="admn-input" type="text" placeholder="correo@dominio.com" ref={newProfesor}></input>

                                <label className="admn-label">
                                    Contraseña
                                </label>
                                <input className="admn-input" type="text" placeholder="*******" ref={newProfesor}></input>

                                <button type="submit" className="admn-submit"> Añadir </button>
                            </form>

                        </div>
                    </Popup>
                </div>

                {/*Sección que muestra listado de profesores */}
                <div className="admn-listAsignaturas">
                    {
                        Profesores.map((profesor, index) => {
                            return (
                                <div className="admn-filaAsignatura" key={index}>
                                    <div className="admn-asignatura">
                                        {profesor.pnombre}
                                    </div>

                                    <Popup trigger={<button className="admn-delbtn"><img src={editIco} className="admn-delIco"></img></button>} onClose={closeModal} modal>
                                        <div className="admn-test">
                                            <div className="admn-poptitle" >
                                                ¿Esta seguro de eliminar {profesor.pnombre}?

                                            </div>
                                            <div className="admn-delModalbuttons">
                                                <button onClick={() => handleDelete(profesor)} className="admn-delModalbtn"> Eliminar</button>
                                                <button onClick={() => closeModal} className="admn-submit"> Cancelar</button>
                                            </div>

                                        </div>
                                    </Popup>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AdmnProf;