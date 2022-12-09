
//utilities
import axios from "axios";
import Popup from "reactjs-popup";
import { useState, useEffect, useRef } from "react";

//style
import "./asignPopup.css";
//ico
import bookIco from "../../../../../imgs/bookIco.svg"



const AsignPopup = (props) => {

    const [asignaturasCurso, setAsignaturasCurso] = useState([]);
    const [profesoresCurso, setProfesoresCurso] = useState([]);
    const [config, setConfig] = useState(null);
    const [addAsignatura, setAddAsignatura] = useState(false);
    const profRef = useRef();
    const AsignRef = useRef();

    const getAsignaturasCurso = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/verAsignaturasCurso", {
                idCurso: props.curso._id
            })
            setAsignaturasCurso(res.data);
        } catch (error) {
            setAsignaturasCurso("No posee asignaturas");
        }
    }
    const getProfesoresCurso = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/obtenerProfesorCurso", {
                idCurso: props.curso._id
            })
            setProfesoresCurso(res.data);
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async(e) => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/asignaturaProfesor", {
                rut: profRef.current.value,
                idCurso: props.curso._id,
                idAsignatura: config
            })
            setConfig(null);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddAsign = async () => {
        try {
            
            const res = await axios.post("http://localhost:5000/api/admin/NuevaAsignaturaCurso", {
                idAsignatura: AsignRef.current.value,
                idCurso: props.curso._id
            })
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {getAsignaturasCurso()
                     getProfesoresCurso()}
                    , []);

    return(
        <Popup trigger={<button className="admn-btn"><img src={bookIco} className="material-icons"></img></button>} modal>
            <div className="admnasign-popup">
                <div className="admn-popuptitle" >
                    Asignaturas del curso
                </div>
                <div className="admnasign-content">
                    
                    {addAsignatura ? 
                    (
                    <form className="admn-addForm" onSubmit={handleAddAsign}>
                        <select ref={AsignRef} className="admnasign-option">
                            <option value={null}>
                                Seleccione asignatura...
                            </option>
                            {
                               props.asignaturas.map((asign, index) => {
                                return(
                                    <option value={asign._id} key={index}> {asign.nombre} </option>
                                )
                               })
                            }
                        </select>
                        <button className="admnasign-modbutton"> añadir </button>
                    </form>
                    )
                    :
                    (<button onClick={() => setAddAsignatura(!addAsignatura)} className="admn-addsmallbutton"> Agregar asignatura </button>)
                    }
                    
                    <div>
                        <div className="adminasign-titles">
                            <div className="adminasign-label">
                            Asignatura
                            </div>
                            <div className="adminasign-label">
                            Profesor 
                            </div>
                        </div>
                        
                        
                        <div className="admnasign-body">
                            { (asignaturasCurso.length > 0) ?
                                    (
                                        asignaturasCurso.map((asignatura, index) => {
                                            let find = false;
                                            return (
                                                config == asignatura._id ?
                                                    (
                                                        <form className="admnasign-row" onSubmit={handleUpdate} key={index}>
                                                            <div className="admnasign-asignaturaBox">
                                                                {asignatura.nombre}
                                                            </div>
                                                            <select className="admnasign-option" ref={profRef}>
                                                                <option value={null}> Seleccione profesor... </option>
                                                                {props.profesores.map((profesor, index2) => {
                                                                    return (
                                                                        <option key={index2} value={profesor.rut}>
                                                                            {profesor.pnombre + " " + profesor.apellidop + " " + profesor.apellidom}
                                                                        </option>
                                                                    )
                                                                })}
                                                            </select>
                                                            <button type="submit" className="admnasign-modbutton"> actualizar</button>
                                                        </form>
                                                    )
                                                    :
                                                    (
                                                        <div className="admnasign-row" key={index}>
                                                            <div className="admnasign-asignaturaBox" >
                                                                {asignatura.nombre}
                                                            </div>
                                                            {profesoresCurso.map((profesor, index2) => {
                                                                let c = 0;
                                                                return (
                                                                    profesor.asignaturas.map((asignaturaProf, index3) => {

                                                                        if (asignaturaProf.asignatura == asignatura._id && c == 0) {
                                                                            find = true;
                                                                            c++;
                                                                            return (
                                                                                <div className="admnasign-asignaturaBox" key={index3}>
                                                                                    {profesor.pnombre + " " + profesor.apellidop + " " + profesor.apellidom}
                                                                                </div>
                                                                            )
                                                                        }
                                                                    }
                                                                    )
                                                                )
                                                            })}
                                                            {!find && <div className="admnasign-asignaturaBox"> No Asignado </div>}
                                                            {config == null && !addAsignatura && <button onClick={() => setConfig(asignatura._id)} className="admnasign-modbutton">Modificar</button>}

                                                        </div>
                                                    )
                                            )
                                        })
                                    )

                                :
                                (
                                    <div className="admnasign-asignaturaBox">
                                        No posee Asignaturas
                                    </div>
                                )
                                
                            }

                        </div>
                    </div>
                </div>
                
                

            </div>
        </Popup>
    )
}

export default AsignPopup;