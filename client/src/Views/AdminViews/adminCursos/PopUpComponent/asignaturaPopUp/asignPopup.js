
//utilities
import axios from "axios";
import Popup from "reactjs-popup";
import { useState, useEffect, useRef } from "react";

//style
import "./asignPopup.css";
//ico
import bookIco from "../../../../../imgs/bookIco.svg"



const AsignPopup = (props) => {

    const [asignaturas, setAsignaturas] = useState([]);
    const [profesores, setProfesores] = useState([]);
    const [allProf, setAllProf] = useState([]);
    const [config, setConfig] = useState(null);
    const [addAsignatura, setAddAsignatura] = useState(false);
    const [allAsignaturas, setAllAsignaturas] = useState([]);
    const profRef = useRef();
    const AsignRef = useRef();

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
            const respAll = await axios.get("http://localhost:5000/api/admin/verProfesores");
            setAllProf(respAll.data);
        } catch (error) {
            console.log(error)
        }
    }
    const getAllAsignaturas = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verAsignaturas");
            
            setAllAsignaturas(res.data);
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


    useEffect(() => {getAsignaturas()
                     getProfesores()
                     getAllAsignaturas()}
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
                               allAsignaturas.map((asign, index) => {
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
                    (<button onClick={() => setAddAsignatura(!addAsignatura)} className="admn-addbutton"> Agregar asignatura </button>)
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
                            { (asignaturas.length > 0) ?
                                    (
                                        asignaturas.map((asignatura, index) => {
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
                                                                {allProf.map((profesor, index2) => {
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
                                                        <div className="admnasign-row">
                                                            <div className="admnasign-asignaturaBox" key={index}>
                                                                {asignatura.nombre}
                                                            </div>
                                                            {profesores.map((profesor, index2) => {
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
                                                            {config == null && <button onClick={() => setConfig(asignatura._id)} className="admnasign-modbutton">Modificar</button>}

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