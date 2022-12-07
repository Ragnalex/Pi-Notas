import "./adminProf.css" //CSS
import axios from "axios"; //middleware

import React, { useEffect, useRef, useContext, useState } from "react";
import Popup from "reactjs-popup";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

//Component - ventanas de configuración profesores
import EditProf from "./Popups-profesores/editProfPopup/editProf";
import AddProf from "./Popups-profesores/addProfPopup/addProf";

//IMAGES
import bottomCloud from "../../../imgs/Ellipse.png"
import editIco from "../../../imgs/trash.svg"


const AdmnProf = () => {

    const [Profesores, setProfesores] = useState([]);
    const navigate = useNavigate();

    const getProfesores = async (e) => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verProfesores");
            const sortData = res.data.sort((elem1, elem2) => elem1.pnombre.localeCompare(elem2.pnombre));
            setProfesores(sortData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getProfesores() }, []);

    return (
        <div className="admn-estudall">
            <div className="admn-econtent">
        
                <div className="admn-top">
                    <div className="admn-etitle">
                        Gestión de Profesores
                    </div>

                    <button onClick={() => navigate("/administrador/inicio")} className="back-button"> Volver </button>
                </div>
                <AddProf></AddProf>

                {/*Sección que muestra info profesores */}
                <div>
                    <table className="admn-edatatable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>N°</th>
                                <th>Rut</th>
                                <th>Primer Nombre</th>
                                <th>Segundo Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Editar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Profesores.map((profesor, index) => {

                                    return (
                                        <tr key={index}>
                                            <td></td>
                                            <td>{index}</td>
                                            <td>{profesor.rut}</td>
                                            <td>{profesor.pnombre}</td>
                                            <td>{profesor.snombre}</td>
                                            <td>{profesor.apellidop}</td>
                                            <td>{profesor.apellidom}</td>
                                            <td>
                                                <EditProf profesor = {profesor} ></EditProf>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <img className="admn-nubesita" src={bottomCloud} />
        </div>
    )
}

export default AdmnProf;