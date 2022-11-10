import React, { useEffect, useRef, useContext, useState } from "react";
import "./pNotas.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Context } from "../../context/context";

//Images
import sefirot from "../../imgs/Ellipse.png";

const PNotas = () => {
    const navigate = useNavigate();
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
                            Juanito Alcachofa
                        </div>
                        <div className="p-correo">
                            juanito@profesor.cl
                        </div>
                        <div className="p-rut">
                            12.345.678-9
                        </div>
                    </div>
                </div>

                <button className="calendario">Calendario de Actividades</button>

                <div className="table-content">

                    <div className="header-tools">
                        <div className="tools">
                            <ul>
                                <li><span><input type="checkbox"/></span></li>

                                <li>
                                    <button>
                                        <i className="material-icons">añadir círculo</i>
                                    </button>
                                </li>

                                <li>
                                    <button>
                                        <i className="material-icons">edit</i>
                                    </button>
                                </li>

                                <li>
                                    <button>
                                        <i className="material-icons">delete</i>
                                    </button>
                                </li>

                                <li>
                                    <button>
                                        <i className="material-icons">share</i>
                                    </button>
                                </li>

                            </ul>
                        </div>

                        <div className="search">

                        </div>

                    </div>

                    <table className="datatable">

                    </table>

                    <div className="footer-tools">

                    </div>

                </div>

            </div>
        </div>
    );
}

export default PNotas;