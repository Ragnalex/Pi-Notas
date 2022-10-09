import React, { useEffect, useRef } from "react";
import "./eNotas.css";
import Lottie from "lottie-react";

//IMAGES
import sefirot from "../../imgs/Ellipse.png";

const ENotas = () => {
    return (
        <div>
            <div className="p-content">
                <div className="encabezado">

                    <div className="titulo t-profile pad">
                        Calificaciones
                    </div>

                    <div className="info-group">
                        <div className="p-nombre">
                            Homero J. Simpson
                        </div>

                        <div className="p-rut">
                            22.222.222-2
                        </div>
                    </div>

                </div>

                <button>Calendario de Actividades</button>

                <div className="b-profile">
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
                </div>

            </div>
        </div>
    );
}

export default ENotas;