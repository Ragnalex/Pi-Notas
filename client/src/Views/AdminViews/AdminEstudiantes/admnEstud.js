
//utilities
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Popup from "reactjs-popup";

//Component
import EditPopup from "./Popups/EstEditPopUp/editPopup";
import AddPopUp from "./Popups/addEstPopup/addEst";

//Style
import "./admnEstud.css"

//ico
import editIco from "../../../imgs/pencil.png";
import bottomCloud from "../../../imgs/Ellipse.png"

const AdmnEstudiantes = () => {

    const [Estudiantes, setEstudiantes] = useState({ N: "", Rut: "", Primer_Nombre: "" , Segundo_Nombre: "", Apellido_Paterno: "", Apellido_Materno: ""});
    const navigate = useNavigate();

    async function modificarEstudiante() {
        await axios.post("http://localhost:5000/api/admin/modificarAlumno", {
            rut:Estudiante.Rut,
            primer_nombre:Estudiante.Primer_Nombre,
            segundo_nombre:Estudiante.Segundo_Nombre,
            apellido_parteno:Estudiante.Apellido_Paterno,
            apellido_materno:Estudiante.Apellido_Materno
            }
        )   
    }

    const getEstudiantes = async (e) => {
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
                <AddPopUp></AddPopUp>

                <div>
                    <table className="admn-edatatable">
                        <thead>
                            <tr>
                                <th></th>
                                
                                <input
                                    type="text"
                                    placeholder="Rut"
                                    value={Estudiante.Rut}
                                    onChange={(e) => setEstudiantes({ ...Estudiante, Rut: e.target.value })}
                                />
                                 <input
                                    type="text"
                                    placeholder="Primer Nombre"
                                    value={Estudiante.Primer_Nombre}
                                    onChange={(e) => setEstudiantes({ ...Estudiante, Primer_Nombre: e.target.value })}
                                />
                                 <input
                                    type="text"
                                    placeholder="Segundo Nombre"
                                    value={Estudiante.Segundo_Nombre}
                                    onChange={(e) => setEstudiantes({ ...Estudiante, Segundo_Nombre: e.target.value })}
                                />
                                 <input
                                    type="text"
                                    placeholder="Apellido Paterno"
                                    value={Estudiante.Apellido_Paterno}
                                    onChange={(e) => setEstudiantes({ ...Estudiante, Apellido_Paterno: e.target.value })}
                                />
                                 <input
                                    type="text"
                                    placeholder="Apellido Materno"
                                    value={Estudiante.Apellido_Materno}
                                    onChange={(e) => setEstudiantes({ ...Estudiante, Apellido_Materno: e.target.value })}
                                />
                                <button classname="admn-editBtn" onClick={modificarEstudiante}> Modificar Estudiante</button>
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
                                                <EditPopup estudiante={estudiante} ></EditPopup>
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