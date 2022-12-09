//utilities
import Popup from "reactjs-popup";
import axios from "axios";
import { useEffect, useState } from "react";

//style
import "./membersPopup.css"

//ico
import userIco from "../../../../../imgs/userIco.svg"


const MembersPopup = (props) => {


    const [jefatura, setJefatura] = useState();
    const [config, setcConfig] = useState(false);

    const [alumnos, setAlumnos] = useState([]);

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

    const getAlumnos = async (e) => {
        try {
            const dataAlumn = await axios.post("http://localhost:5000/api/prof/verAlumnosCurso", {
                idCurso: props.curso._id
            })
            console.log(dataAlumn.data);
            
            setAlumnos(dataAlumn.data);
        } catch (error) {
            setAlumnos([]);
        }
    }

    useEffect(() => {
        getJefatura()
        getAlumnos()
    }, []);

    return (
        <Popup trigger={<button className="admn-btn"><img src={userIco} className="material-icons"></img></button>} modal>
            <div className="admn-membersContent">
                <div className="admn-popuptitle" >
                    Integrantes del curso
                </div>
                <div className="admn-membersForm">
                    <div className="members-textbox">
                        <label className="members-label">
                            Jefatura
                        </label>
                        <div className="members-jefatura">
                            {jefatura == null ?
                                "No Definido"
                                :
                                jefatura.pnombre + " " + jefatura.apellidop
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
                                        alumnos.length > 0 ? 
                                            alumnos.map((alumno,index) => {
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



                    <button className="admn-submit"> Actualizar </button>
                </div>


            </div>
        </Popup>
    )
}

export default MembersPopup;