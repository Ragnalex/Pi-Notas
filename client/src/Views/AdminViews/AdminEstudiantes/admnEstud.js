
//utilities
import { useEffect, useState } from "react"
import axios from "axios";


//Style
import "./admnEstud.css"


const AdmnEstudiantes = () => {

    const [ Estudiantes, setEstudiantes ] = useState([]);

    const getEstudiantes = async() => {
        try {
            
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
                    <div className="admn-edatatable">
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

                        </tbody>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AdmnEstudiantes;