import React, { useEffect, useRef, useContext, useState } from "react";
import "./pNotas.css";
import Lottie from "lottie-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Calendario from "../../../components/Calendar/Calendar"

import { Context } from "../../../context/context";

//Images
import sefirot from "../../../imgs/Ellipse.png";
import edit from "../../../imgs/pencil.png";
import delete_btn from "../../../imgs/delete.png";

//Componentes
import AddNota from "./Popups/addNotas/addNota";
import DelNota from "./Popups/delNotas";



const PNotas = () => {

    const navigate = useNavigate();

    const [alumnos, setAlumnos] = useState([]);

    const { idcurso } = useParams();

    const { asignatura } = useParams();

    const { user, dispatch } = useContext(Context);

    const getAlumnos = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/prof/verAlumnosCurso", {
                idCurso: idcurso
            })
            setAlumnos(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getAlumnos()}, [])

    return (
        <div className="admn-estudall">
            <div className="admn-econtent">
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
                    
                    <button onClick={() => navigate("/profesor/asignaturas/")} className="back-button"> Volver </button>
                    
                    
                </div>

                <Calendario idcurso={idcurso} tipo="profesor"></Calendario>

                {/*Sección que muestra notas alumnos */}
                <div className="table-content">

                    {/*Tabla de notas*/}
                    <div>
                        <table className="datatable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>N°</th>
                                    <th>Nombre</th>
                                    <th>N1</th>
                                    <th>N2</th>
                                    <th>N3</th>
                                    <th>N4</th>
                                    <th>N5</th>
                                    <th>N6</th>
                                    <th>N7</th>
                                    <th>N8</th>
                                    <th>Promedio</th>
                                    <th>+ Nota</th>
                                    <th>Eliminar</th>
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
                                            listNotas[9] = Math.round(listNotas[9] * 10) / 10
                                        }


                                        getNotas();
                                        return (
                                            
                                            <tr key={index}>
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
                                                <td>
                                                    {<AddNota alumno = {alumno} asignatura = {asignatura}></AddNota>}
                                                </td>
                                                <td>
                                                    {/*<DelNota alumno = {alumno} ></DelNota>*/}
                                                    <button className="admn-editBtn"><img className="material-icons" src={delete_btn} alt="eliminar" /></button>
                                                </td>
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