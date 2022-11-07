import React, { useEffect, useRef, useContext, useState } from "react";
import "./eNotas.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Context } from "../../context/context";


//IMAGES
import sefirot from "../../imgs/Ellipse.png";

const ENotas = () => {

    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    const [Asignaturas, setAsignaturas] = useState([])

    const handleLogout = () => {        //Metodo de cierre de sesión para el boton
        dispatch({ type: "LOGOUT" });
        navigate("/")
    }

    const getAsignaturas = async () => {
        //Funcion utilizada para traer todas las asignaturas asignadas al curso que posee el estudiante

        try {
            const res = await axios.post("http://localhost:5000/api/alum/verAsignaturas", {
                idCurso: user.curso
            })
            setAsignaturas(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getNotas = (idAsignatura) => {
        //Funcion utilizada para obtener las notas ordenadas que posea el estudiante con la idAsignatura correspondiente

        try {
            const listNotas = [];
            for (let i = 0; i < user.notas.length; i++) {
                if (idAsignatura == user.notas[i].asignatura) {
                    listNotas[i] = user.notas[i].calificacion
                }
            }
            return (listNotas);

        } catch (error) {
            console.log(error)
        }
    }

    const getProm = () => {

        //Funcion utilizada para calcular los promedios por asignatura

        let total = 0;
        for (let i = 0; i < user.notas.length; i++){
            total = total + user.notas[i].calificacion;
            
        }
        return (total/user.notas.length)
    }

    useEffect(() => { getAsignaturas() }, []);

    return (
        <div>
            <button onClick={handleLogout} className="back-button"> Volver </button>
            <div className="est-content">
                <div className="est-encabezado">

                    <div className="t-profile">
                        Calificaciones
                    </div>

                    <div className="est-info-group">
                        <div className="est-nombre">
                            {user.pnombre + " " + user.apellidop + " " + user.apellidom}
                        </div>

                        <div className="est-rut">
                            {user.rut}
                        </div>
                    </div>

                </div>

                <button className="calendario">Calendario de Actividades</button>

                <div className="est-notas-content">
                    
                        <div className="column">
                            {
                                Asignaturas.map((asignatura, index) => {         //Renderizado de los botones del backend

                                    return (

                                        <div className="fila-notas">
                                            <div className="column">
                                                <div className="col-titulo">
                                                    Asignatura
                                                </div>
                                                <button className="asignatura" key={index}>
                                                    {asignatura.nombre}
                                                </button>
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P1
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 0 &&
                                                    getNotas(asignatura._id)[0]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P2
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 1 &&
                                                    getNotas(asignatura._id)[1]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P3
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 2 &&
                                                    getNotas(asignatura._id)[2]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P4
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 3 &&
                                                    getNotas(asignatura._id)[3]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P5
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 4 &&
                                                    getNotas(asignatura._id)[4]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P6
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 5 &&
                                                    getNotas(asignatura._id)[5]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P7
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 6 &&
                                                    getNotas(asignatura._id)[6]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P8
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 7 &&
                                                    getNotas(asignatura._id)[7]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    P9
                                                </div>

                                                <div className="labels">
                                                {getNotas(asignatura._id).length > 8 &&
                                                    getNotas(asignatura._id)[8]
                                                }
                                                </div>
                                                
                                            </div>

                                            <div className="column">
                                                <div className="col-titulo">
                                                    Promedio
                                                </div>

                                                <div className="labels l-prom">
                                                    {getNotas(asignatura._id).length > 0 &&
                                                        getProm()
                                                    }
                                                </div>
                                                


                                            </div>
      

                                        </div>
                                    )

                                })

                            }

                        </div>     

                </div>
            </div>
            <img className="nubesita" src={sefirot} alt="FondoEducador" />
        </div>
    );
}

export default ENotas;