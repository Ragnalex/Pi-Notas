// -- Ventana para agregar profesor

//Utitlities
import { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

//style
import "./addProf.css";
import { createRoutesFromElements } from "react-router-dom";

const EditProf = () => {

    const [success, setSuccess] = useState(false);
    const closeModal = () => setSuccess(false);
    const [jefatura, setJefatura] = useState([]);

    const rutRef = useRef();
    const pnombreRef = useRef();
    const snombreRef = useRef();
    const apellidopRef = useRef();
    const apellidomRef = useRef();
    const jefaturaRef = useRef(null);
    const correoRef = useRef();
    const contraRef = useRef();

    const getJefatura = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verCursos");
            setJefatura(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(jefaturaRef.current.value != "No Definido") {
                const res = await axios.post("http://localhost:5000/api/admin/ingresarProfesor",{
                    rut:rutRef.current.value,
                    pnombre:pnombreRef.current.value,
                    snombre:snombreRef.current.value,
                    apellidop:apellidopRef.current.value,
                    apellidom:apellidomRef.current.value,
                    jefatura:jefaturaRef.current.value,
                    correo: correoRef.current.value,
                    contrasena: contraRef.current.value,
                })
                setSuccess(true);
            } else {
                const res = await axios.post("http://localhost:5000/api/admin/ingresarProfesor", {
                    rut:rutRef.current.value,
                    pnombre:pnombreRef.current.value,
                    snombre:snombreRef.current.value,
                    apellidop:apellidopRef.current.value,
                    apellidom:apellidomRef.current.value,
                    correo: correoRef.current.value,
                    contrasena: contraRef.current.value,
                })
                setSuccess(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getJefatura() }, []);

    return (
        <div>
            {/* Ventana de agregado exitoso */}
            {success ?
                (<Popup open={success} closeOnDocumentClick onClose={closeModal}>
                    <div className="admn-popAddEstContent">
                        <div className="admn-popupAddEstForm">
                            <div className="admn-successAddEst">
                                Profesor Añadido con Éxito
                            </div>

                            <button className="admn-AddEstsubmitBtn" onClick={closeModal}> Aceptar </button>
                        </div>
                    </div>
                </Popup>) 
                
                :

                (<Popup trigger={<button className="admn-addbutton"> Añadir Profesor </button>} modal >
                    {/* Ventada de ingreso nuevo profesor */}
                    <div className="admn-popAddEstContent">
                        <div>
                            <div className="admn-popupAddEsttitle">
                                Nuevo Profesor
                            </div>
                        </div>

                        <form className="admn-popupAddEstForm" onSubmit={handleSubmit}>
                            <div className="admn-inputsContent">

                                {/* Input RUT */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Rut Profesor
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"11.111.111-1"} ref={rutRef} />
                                </div>

                                {/* Input primer nombre profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Primer Nombre
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Juan"} ref={pnombreRef}/>
                                </div>

                                {/* Input segundo nombre profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Segundo Nombre
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Pedro"} ref={snombreRef}/>
                                </div>

                                {/* Input apellido paterno profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Apellido Paterno
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Perez"} ref={apellidopRef}/>
                                </div>

                                {/* Input apellido materno profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Apellido Materno
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Perez"} ref={apellidomRef}/>
                                </div>

                                {/* Input correo profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Correo
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"profesor@profesor.cl"} ref={correoRef}/>
                                </div>

                                {/* Input contraseña temporal profesor */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Contraseña temporal
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"contraseña..."} ref={contraRef}/>
                                </div>

                                {/* Input curso asignado para hacer de jefatura */}
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Jefatura
                                    </label>

                                    <select className="admn-popupAddEstSelect" ref={jefaturaRef}>
                                        <option disabled={false} value={null}>
                                            No Definido
                                        </option>
                                        {
                                            jefatura.map((jefatura,index) => {
                                                return (
                                                    <option value={jefatura._id} key={index} placeholder={"jefatura..."}> {jefatura.nombre + " " + jefatura.año} </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="admn-AddEstsubmitBtn"> Añadir </button>
                        </form>
                    </div>
                </Popup>)
            }
        </div>
    )
}

export default EditProf;