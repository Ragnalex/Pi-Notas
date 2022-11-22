//Style
import "./adminCursos.css"

//utilities
import axios from "axios"
import { useState, useEffect } from "react"

//ico
import editIco from "../../../imgs/pencil.png"
import calendarIco from "../../../imgs/calendarIco.png"
import bottomCloud from "../../../imgs/Ellipse.png"
import addCircle from "../../../imgs/plus-circle.png"

const AdminCursos = () => {

    const [ cursos, setCursos ] = useState([]);

    const getCursos = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verCursos")

            setCursos(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect(() => {getCursos()}, []);

    return(
        <div>
            <div className="admn-ccontent">
                <div className="admn-ctitle">
                    Gestión de cursos
                </div>
                <div className="admn-tools">
                    <button className="admn-addBtn">
                        <img className="material-icons" src = {addCircle} alt="añadir"/>
                    </button>
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
                                        <th>año</th>
                                        <th>Editar</th>
                                        <th>Calendario</th>
                                    </tr>
                                </thead>

                                <tbody>

                                {
                                    cursos.map((curso, index) => {      
                                        

                                        return(
                                            
                                            <tr key={index}>
                                            <td></td>
                                            <td>{index+1}</td>
                                            <td>{curso.nombre}</td>
                                            <td>{curso.año}</td>
                                            <td>
                                                <button className="admn-btn">
                                                    <img className="material-icons" src = {editIco} alt="editar"/>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="admn-btn">
                                                    <img className="material-icons" src = {calendarIco} alt="calendario"/>
                                                </button>
                                            </td>
                                            </tr>
                                            
                                            
                                        )
                                    })
                                }
                                
                                </tbody>
                            </table>
                        
                        </div>

                        
                    </div>
                    
                </div>

                <img className="nubesita" src = {bottomCloud} />

            </div>


        
        </div>
    )
}

export default AdminCursos;