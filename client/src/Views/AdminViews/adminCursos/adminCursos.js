//Style
import "./adminCursos.css"

//utilities
import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Popup from "reactjs-popup"


//Popup
import AddPopup from "./PopUpComponent/AddPopup/addPopup"
import DelPopUp from "./PopUpComponent/delPopUp/delPopup"
import MemPopUp from "./PopUpComponent/memberPopUp/membersPopups"
import AsignPopup from "./PopUpComponent/asignaturaPopUp/asignPopup"
import Calendario from "../../../Components/Calendar/Calendar"



//ico
import editIco from "../../../imgs/pencil.png"
import calendarIco from "../../../imgs/calendarIco.png"
import bottomCloud from "../../../imgs/Ellipse.png"
import userIco from "../../..//imgs/userIco.svg"



const AdminCursos = () => {

    const [cursos, setCursos] = useState([]);
    const [integrantes, setIntegrantes] = useState(false);

    const navigate = useNavigate();

    const getCursos = async (e) => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verCursos")
            const sortData = res.data.sort((elem1, elem2) => elem1.nombre.localeCompare(elem2.nombre))
            setCursos(sortData);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => { getCursos() }, []);

    return (
        <div className="admn-cursosall">
            <div className="admn-ccontent">
                <div className="admn-topcontent">
                    <div className="admn-ctitle">
                        Gestión de cursos
                    </div>
                    <button onClick={() => navigate("/administrador/inicio")} className="back-button"> Volver </button>
                </div>

                <div className="admn-tools">
                    <AddPopup />                  {/*Llama al componente addPopUp*/}
                </div>


                <div className="admn-bodycursos">

                    <div className="admn-tablecursos">

                        {/*Tabla de notas*/}
                        <div>

                            <table className="admn-datatable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>N°</th>
                                        <th>Nombre</th>
                                        <th>Paralelo</th>
                                        <th>año</th>
                                        
                                        <th>Integrantes</th>
                                        <th>Asignaturas</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        cursos.map((curso, index) => {


                                            return (

                                                <tr key={index}>
                                                    <td></td>
                                                    <td>{index + 1}</td>
                                                    <td>{curso.nombre}</td>
                                                    <td>{curso.paralelo}</td>
                                                    <td>{curso.año}</td>
                                                    <td><MemPopUp curso={curso} /></td>
                                                    <td><AsignPopup curso={curso} /></td>
                                                    <td><DelPopUp curso={curso} /></td>
                                                </tr>


                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>


                    </div>

                </div>



            </div>

            <img className="admn-nubesita" src={bottomCloud} />

        </div>
    )
}

export default AdminCursos;