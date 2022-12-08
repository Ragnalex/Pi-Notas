
//utilities
import axios from "axios";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";

//style
import "./asignPopup.css";
//ico
import bookIco from "../../../../../imgs/bookIco.svg"


const AsignPopup = (props) => {

    const [asignaturas, setAsignaturas] = useState([]);
    const [profesores, setProfesores] = useState([]);

    const getAsignaturas = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/verAsignaturasCurso", {
                idCurso: props.curso._id
            })
            setAsignaturas(res.data);
        } catch (error) {
            setAsignaturas("No posee asignaturas");
            console.log(error)
        }
    }
    const getProfesores = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/obtenerProfesorCurso", {
                idCurso: props.curso._id
            })
            setProfesores(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getAsignaturas()
                     getProfesores()}
                    , []);

    return(
        <Popup trigger={<button className="admn-btn"><img src={bookIco} className="material-icons"></img></button>} modal>
            <div className="admnasign-popup">
                <div className="admn-popuptitle" >
                    Asignaturas del curso
                </div>
                <div className="admnasign-content">
                    
                    <div>
                        <div className="adminasign-label">
                        Asignaturas
                        </div>
                        
                        <div className="admnasign-body">
                            {
                                asignaturas.map((asignatura, index) => {
                                    return(
                                        <div key={index}>
                                            
                                            <div className="admnasign-asignaturaBox" key={index}>
                                            { asignatura.nombre}
                                            </div>
                                            <div>
                                            {profesores.map((profesor, index2) => {
                                                return(
                                                    
                                                    <div key={index2}>
                                                        {console.log(profesor)}
                                                    </div>
                                                )
                                            })}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
                

            </div>
        </Popup>
    )
}

export default AsignPopup;