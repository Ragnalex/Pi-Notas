import React, { useEffect, useRef, useContext, useState } from "react";
import "./pNotas.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Context } from "../../../context/context";

//Images
import sefirot from "../../../imgs/Ellipse.png";
import add_circle from "../../../imgs/plus-circle.png";
import edit from "../../../imgs/pencil.png";
import delete_btn from "../../../imgs/delete.png";

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
                                <tr>
                                    <td><span className="available"></span></td>
                                    <td>01</td>
                                    <td>Marcos Rivas</td>
                                    <td>5.5</td>
                                    <td>6.4</td>
                                    <td>5.0</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td><span className="available"></span></td>
                                    <td>02</td>
                                    <td>Marcos Rivas</td>
                                    <td>5.5</td>
                                    <td>6.4</td>
                                    <td>5.0</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td><span className="available"></span></td>
                                    <td>03</td>
                                    <td>Marcos Rivas</td>
                                    <td>5.5</td>
                                    <td>6.4</td>
                                    <td>5.0</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td><span className="available"></span></td>
                                    <td>04</td>
                                    <td>Marcos Rivas</td>
                                    <td>5.5</td>
                                    <td>6.4</td>
                                    <td>5.0</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td><span className="available"></span></td>
                                    <td>05</td>
                                    <td>Marcos Rivas</td>
                                    <td>5.5</td>
                                    <td>6.4</td>
                                    <td>5.0</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                
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