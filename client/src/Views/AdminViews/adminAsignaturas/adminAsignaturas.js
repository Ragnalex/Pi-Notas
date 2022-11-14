//Css import
import "./adminAsignaturas.css"

//utilities
import React, { useEffect, useRef, useContext, useState } from "react";

//middleware
import axios from "axios";

//ico import
import editIco from "../../../imgs/icons/editIco.svg"

const AdminAsignaturas = () => {


    const [Asignaturas, setAsignaturas ] = useState([]);

    const getAsignaturas = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verAsignaturas")
            setAsignaturas(res.data);
        } catch (error) {
           console.log(error); 
        }
    }

    useEffect(() => {getAsignaturas()}, []);
    

    return(

        <div className="admn-acontent">
            <div className="admn-atitle">
                Gestión de Asignaturas
            </div>

            <div className="admn-topButtons">
                <button className="admn-addbutton"> añadir asignatura </button>
                <button className="admn-delbutton"> eliminar asignatura </button>
            </div>

            <div className="admn-listAsignaturas">
                {
                    Asignaturas.map((asignatura, index)=> {
                        return(
                            <div className="admn-filaAsignatura">
                                <div className="admn-asignatura">
                                    {asignatura.nombre}
                                </div>
                                <button className="admn-editIco"><img src={editIco}></img></button>
                            </div>
                        )
                    }
                    )
                }
            </div>


            
        </div>

    )


}

export default AdminAsignaturas;