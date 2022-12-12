//utilities
import { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

//style
import "./addEst.css";





const EditPopup = () => {

    const [success, setSuccess] = useState(false);
    const closeModal = () => setSuccess(false);
    const [cursos, setCursos] = useState([]);

    const rutRef = useRef();
    const pnombreRef = useRef();
    const snombreRef = useRef();
    const apellidopRef = useRef();
    const apellidomRef = useRef();
    const cursoRef = useRef(null);

    const getCurso = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verCursos");
            setCursos(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(cursoRef.current.value != "No Definido"){
                const res = await axios.post("http://localhost:5000/api/admin/ingresarAlumno", {
                    rut: rutRef.current.value,
                    pnombre: pnombreRef.current.value,
                    snombre: snombreRef.current.value,
                    apellidop: apellidopRef.current.value,
                    apellidom: apellidomRef.current.value,
                    curso: cursoRef.current.value
                })
                setSuccess(true);
                window.location.reload();
            }
            else{
                const res = await axios.post("http://localhost:5000/api/admin/ingresarAlumno", {
                    rut: rutRef.current.value,
                    pnombre: pnombreRef.current.value,
                    snombre: snombreRef.current.value,
                    apellidop: apellidopRef.current.value,
                    apellidom: apellidomRef.current.value
                })
                window.location.reload();
                setSuccess(true);
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getCurso() }, []);

    return (

        <div>

            {success ?

                (<Popup open={success} closeOnDocumentClick onClose={closeModal}>
                    <div className="admn-popAddEstContent">
                        <div className="admn-popupAddEstForm">
                            <div className="admn-successAddEst">
                                Alumno Añadido con exito
                            </div>

                            <button className="admn-AddEstsubmitBtn" onClick={closeModal}> Aceptar </button>

                        </div>

                    </div>
                </Popup>)

                :

                (<Popup trigger={<button className="admn-addbutton"> Añadir Estudiante </button>} modal >
                    <div className="admn-popAddEstContent">
                        <div>
                            <div className="admn-popupAddEsttitle">
                                Nuevo Estudiante
                            </div>
                        </div>

                        <form className="admn-popupAddEstForm" onSubmit={handleSubmit}>
                            <div className="admn-inputsContent">
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Rut Estudiante
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"11.111.111-1"} ref={rutRef} />



                                </div>

                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Primer Nombre
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Juan"} ref={pnombreRef} />


                                </div>
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Segundo Nombre
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Pedro"} ref={snombreRef} />


                                </div>
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Apellido Paterno
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Apellido"} ref={apellidopRef} />


                                </div>
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Apellido Materno
                                    </label>

                                    <input required className="admn-popupAddEstinput" placeholder={"Apellido"} ref={apellidomRef} />

                                </div>
                                <div className="admn-popupAddEstBox">
                                    <label className="admn-popupAddEstLabel">
                                        Curso
                                    </label>
                                    <select className="admn-popupAddEstSelect" ref={cursoRef}>
                                        <option disabled={false} value={null}>
                                            No Definido
                                        </option>
                                        {

                                            cursos.map((curso, index) => {
                                                return (

                                                    <option value={curso._id} key={index} placeholder={"curso..."}> {curso.nombre + " " + curso.año} </option>
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
export default EditPopup;