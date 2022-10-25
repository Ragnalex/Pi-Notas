import React, { useEffect, useRef, useContext } from "react";
import "./eNotas.css";
import Lottie from "lottie-react";

import { Context } from "../../context/context";


//IMAGES
import sefirot from "../../imgs/Ellipse.png";

const ENotas = () => {

    const { user } = useContext(Context);

    return (
        <div>
            <div className="est-content">
                <div className="est-encabezado">

                    <div className="t-profile">
                        Calificaciones
                    </div>

                    <div className="est-info-group">
                        <div className="est-nombre">
                            {user.pnombre + " " +  user.apellidop + " " +  user.apellidom}
                        </div>

                        <div className="est-rut">
                            {user.rut}
                        </div>
                    </div>

                </div>

                <button className="calendario">Calendario de Actividades</button>

                <div className="est-notas-content">
                    <div className="column">
                        <div className="col-titulo">
                            Asignatura
                        </div>

                        <button className="asignatura">
                            Lenguaje y Comunicación
                        </button>

                        <button className="asignatura">
                            Matemáticas
                        </button>

                        <button className="asignatura">
                            Ciencias
                        </button>

                        <button className="asignatura">
                            Historia
                        </button>

                        <button className="asignatura">
                            Geografía
                        </button>

                        <button className="asignatura">
                            Ciencias Sociales
                        </button>

                        <button className="asignatura">
                            Inglés
                        </button>

                        <button className="asignatura">
                            Educación Física
                        </button>

                        <button className="asignatura">
                            Artes Visuales o Musicales
                        </button>

                        <button className="asignatura">
                            Tecnología
                        </button>

                        <button className="asignatura">
                            Filosofía
                        </button>
                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P1
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P2
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P3
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P4
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P5
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P6
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P7
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P8
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P9
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            P10
                        </div>

                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>
                        <div className="labels"></div>

                    </div>

                    <div className="column">
                        <div className="col-titulo">
                            Promedio
                        </div>

                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>
                        <div className="labels l-prom"></div>

                    </div>
                </div>
            </div>
            <img className="nubesita" src = {sefirot} alt="FondoEducador"/>
        </div>
    );
}

export default ENotas;