
//utilities
import { useEffect, useState } from "react"
import axios from "axios";


//Style
import "./admnEstud.css"

//ico
import editIco from "../../../imgs/pencil.png";


const AdmnEstudiantes = () => {

    const [ Estudiantes, setEstudiantes ] = useState([]);

    const getEstudiantes = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verEstudiantes");
            setEstudiantes(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getEstudiantes()}, [])

    return (   
        <div className="admn-estudall">
            <div className="admn-econtent">
                <div className="admn-etitle">
                    Gestión de estudiantes
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
                                Estudiantes.map((estudiante,index) => {


                                    return(
                                        <tr key={index}>
                                            <td></td>
                                            <td>{index}</td>
                                            <td>{estudiante.rut}</td>
                                            <td>{estudiante.pnombre}</td>
                                            <td>{estudiante.snombre}</td>
                                            <td>{estudiante.apellidop}</td>
                                            <td>{estudiante.apellidom}</td>
                                            <td> 
                                                <button className="admn-editBtn">
                                                    <img className="admn-editIco" src={editIco} alt="editar" />
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
    )
}

export default AdmnEstudiantes;