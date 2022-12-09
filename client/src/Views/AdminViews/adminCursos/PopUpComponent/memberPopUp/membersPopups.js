//utilities
import Popup from "reactjs-popup";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

//style
import "./membersPopup.css"

//ico
import userIco from "../../../../../imgs/userIco.svg"


const MembersPopup = (props) => {


    const [jefatura, setJefatura] = useState();
    const [config, setConfig] = useState(false);
    const [addEstud, setAddEstud] = useState(false);
    const [alumnosCurso, setAlumnosCurso] = useState([]);
    const jefRef = useRef();
    const alumRef = useRef();

    const getJefatura = async (e) => {
        try {
            const profesor = await axios.post("http://localhost:5000/api/admin/obtenerProfesor", {
                idcurso: props.curso._id
            })
            setJefatura(profesor.data);
        } catch (error) {
            setJefatura("No Asignado");
        }
    }

    const getUsuarios = async (e) => {
        try {
            const dataAlumn = await axios.post("http://localhost:5000/api/prof/verAlumnosCurso", {
                idCurso: props.curso._id
            })
            setAlumnosCurso(dataAlumn.data);

        } catch (error) {
            setAlumnosCurso([]);
        }
    }

    const updateJefatura = async() => {
        try {
            await axios.post("http://localhost:5000/api/admin/AsignarProfJefe", {
                rut: jefRef.current.value,
                idCurso: props.curso._id
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    const addAlumno = async() => {
        try {
            await axios.post("http://localhost:5000/api/admin/AsignarAlumnoCurso", {
                rut: alumRef.current.value,
                idCurso: props.curso._id
            })
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        getJefatura()
        getUsuarios()
    }, []);

    return (
        <Popup trigger={<button className="admn-btn"><img src={userIco} className="material-icons"></img></button>} modal>
            <div className="admn-membersContent">
                <div className="admn-popuptitle" >
                    Integrantes del curso
                </div>
                <div className="admn-membersForm">
                    <div className="admn-toptools">
                        <div className="members-box">
                            <label className="members-label">
                                Jefatura
                            </label>
                            {config ? 
                            (
                                
                                    <form className="members-jefaturabox" onSubmit={updateJefatura}>
                                        <select mode="multiple" ref={jefRef} className="jefatura-options" required placeholder="Asignar profesor...">
                                        {jefatura == null ?
                                            <option value={null}> Sin Asignar </option>
                                            :
                                            <option value={jefatura.rut}> {jefatura.pnombre + " " + jefatura.apellidop} </option>   
                                        }
                                        {
                                            props.profesores.map((prof, index) => {
                                                return (
                                                    <option value={prof.rut}> {prof.pnombre} {prof.apellidop}</option>
                                                )
                                            })
                                        }
                                        </select>
                                        <button type="submit"> Guardar</button>
                                    </form>
                                    
                            
                            )
                                
                            :
                            (
                                <div className="members-jefaturabox">
                                    <div className="members-jefatura">
                                    {jefatura == null ?
                                        "No Definido"
                                        :
                                        jefatura.pnombre + " " + jefatura.apellidop
                                    }
                                    </div>
                                    {!addEstud && <button onClick={() => setConfig(!config)}> Cambiar </button>}
                                    
                                </div>
                            )
                            }
                            
                        </div>

                        <div className="members-box">
                            {addEstud ? 
                            (
                                <form className="members-box" onSubmit={addAlumno}>
                                <label className="members-label"> 
                                Agregar estudiante
                                </label>
                                <div className="members-jefaturabox">
                                    <select ref={alumRef} className="members-jefatura">
                                        <option value={null}> Alumno... </option>
                                        {
                                            props.alumnos.map((alumno,index)=> {
                                                return(
                                                    <option value={alumno.rut}>{alumno.rut} / {alumno.pnombre} {alumno.apellidop}</option>
                                                )
                                            })
                                        }
                                        
                                    </select>
                                    <button type="submit"> Añadir </button>
                                </div>
                                </form>
                                
                            )
                            :
                            (<button onClick={() => setAddEstud(!addEstud)} className="admn-addsmallbutton"> Nuevo Estudiante </button>)
                            }
                            
                            
                            
                            
                        </div>

                    </div>

                    <div className="members-textbox">
                        <label className="members-label">
                            Alumnos
                        </label>
                        <div className="members-tablecontent">
                            <table className="members-datatable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>N°</th>
                                        <th>Rut</th>
                                        <th>Primer Nombre</th>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        alumnosCurso.length > 0 ? 
                                            alumnosCurso.map((alumno,index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td></td>
                                                        <td>{alumno != null && index}</td>
                                                        <td>{alumno != null && alumno.rut}</td>
                                                        <td>{alumno != null && alumno.pnombre}</td>
                                                        <td>{alumno != null && alumno.apellidop}</td>
                                                        <td>{alumno != null && alumno.apellidom}</td>
                                                    </tr>
                                                )
                                            })
                                        :
                                        (
                                            <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>


            </div>
        </Popup>
    )
}

export default MembersPopup;