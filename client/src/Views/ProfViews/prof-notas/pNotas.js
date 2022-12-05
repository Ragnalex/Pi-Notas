import React, { useEffect, useRef, useContext, useState } from "react";
import "./pNotas.css";
import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Context } from "../../../context/context";

//Images
import sefirot from "../../../imgs/Ellipse.png";
import add_circle from "../../../imgs/plus-circle.png";
import edit from "../../../imgs/pencil.png";
import delete_btn from "../../../imgs/delete.png";



const PNotas = () => {

    const navigate = useNavigate();

    const [alumnos, setAlumnos] = useState([]);

    const { idcurso } = useParams();

    const { asignatura } = useParams();

    const { user, dispatch } = useContext(Context);

    const getAlumnos = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/prof/verAlumnosCurso", {
                id: idcurso
            })
            setAlumnos(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getAlumnos()}, [])

    return (
        <div>
            <button onClick={() => navigate("/profesor/cursos")} className="back-button"> Volver </button>
            <div className="est-content">
                <div className="est-encabezado">
                    <div className="t-profile">
                        Calificaciones
                    </div>

                    <div className="est-info-group">
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

                <button className="calendario">Calendario de Actividades</button>

                <div className="table-content">

                    <div className="header-tools">
                        <div className="tools">

                            <button className="notas-btn">
                                <img className="material-icons" src = {add_circle} alt="add_circle"/>
                            </button>
                            
                            <button className="notas-btn">
                                <img className="material-icons" src = {edit} alt="edit"/>
                            </button>

                            <button className="notas-btn">
                                <img className="material-icons" src = {delete_btn} alt="delete_btn"/>
                            </button>
                        </div>

                        <div className="search">
                            <input type="text" name="" id="" className="input-box"/>
                        </div>

                    </div>

                    {/*Tabla de notas*/}
                    <div>
                        <table className="datatable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>N°</th>
                                    <th>Nombre</th>
                                    <th>Nota 1</th>
                                    <th>Nota 2</th>
                                    <th>Nota 3</th>
                                    <th>Nota 4</th>
                                    <th>Nota 5</th>
                                    <th>Nota 6</th>
                                    <th>Nota 7</th>
                                    <th>Nota 8</th>
                                    <th>Promedio</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    alumnos.map((alumno, index) => {

                                        const listNotas = [];
                                        let suma = 0;
                                        let cant = 0;
                                        const getNotas = () => {
                                            for (let i = 0; i < alumno.notas.length ; i++){
                                                if (alumno.notas[i].asignatura == asignatura ){
                                                    listNotas[alumno.notas[i].numero] = alumno.notas[i].calificacion;
                                                    cant++;
                                                    if (i == 0){
                                                        suma = alumno.notas[i].calificacion;
                                                    } else suma = suma + alumno.notas[i].calificacion;
                                                }
                                            }
                                            listNotas[9] = suma/cant;
                                        }


                                        getNotas();
                                        return (
                                            
                                            <tr>
                                                <td><span className="available"></span></td>
                                                <td>{index+1}</td>
                                                <td>{alumno.pnombre + " " + alumno.apellidop + " " + alumno.apellidom}</td>
                                                <td>{(listNotas.length > 0 && listNotas[1] != null && listNotas[1]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[2] != null && listNotas[2]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[3] != null && listNotas[3]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[4] != null && listNotas[4]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[5] != null && listNotas[5]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[6] != null && listNotas[6]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[7] != null && listNotas[7]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[8] != null && listNotas[8]) || "-" }</td>
                                                <td>{(listNotas.length > 0 && listNotas[9] != null && listNotas[9]) || "-" }</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    

                </div>
                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
            </div>
        </div>
    );
}

export default PNotas;