
//utilities
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Popup from "reactjs-popup";

//Component
import EditPopup from "../../../components/EstEditPopUp/editPopup";


//Style
import "./admnEstud.css"

//ico
import editIco from "../../../imgs/pencil.png";
import bottomCloud from "../../../imgs/Ellipse.png"

const AdmnEstudiantes = () => {

    const [Estudiantes, setEstudiantes] = useState([]);
    const navigate = useNavigate();

    const getEstudiantes = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verEstudiantes");
            const sortData = res.data.sort((elem1, elem2) => elem1.pnombre.localeCompare(elem2.pnombre));
            setEstudiantes(sortData);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getEstudiantes() }, [])

    return (
        <div className="admn-estudall">
            <div className="admn-econtent">
                <div className="admin-top">
                    <div className="admn-etitle">
                        Gestión de estudiantes
                    </div>
                    <button className="back-button" onClick={() => navigate("/administrador/inicio")}>Volver</button>
                </div>
                
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
                                Estudiantes.map((estudiante, index) => {


                                    return (
                                        <tr key={index}>
                                            <td></td>
                                            <td>{index}</td>
                                            <td>{estudiante.rut}</td>
                                            <td>{estudiante.pnombre}</td>
                                            <td>{estudiante.snombre}</td>
                                            <td>{estudiante.apellidop}</td>
                                            <td>{estudiante.apellidom}</td>
                                            <td>
                                                <EditPopup estudiante = {estudiante} ></EditPopup>
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

export default AdmnEstudiantes;