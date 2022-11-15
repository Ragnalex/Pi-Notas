//Css import
import "./adminAsignaturas.css"

//utilities
import React, { useEffect, useRef, useContext, useState } from "react";
import Popup from "reactjs-popup"

//middleware
import axios from "axios";

//ico import
import editIco from "../../../imgs/icons/editIco.svg"


const AdminAsignaturas = () => {

    const [Asignaturas, setAsignaturas ] = useState([]);

    const newAsignatura = useRef();

    const getAsignaturas = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verAsignaturas")
            setAsignaturas(res.data);
        } catch (error) {
           console.log(error); 
        }
    }

    const AddAsignatura = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/ingresarAsignatura", {
                nombre: newAsignatura.current.value
            })
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {getAsignaturas()}, []);

    return(

        <div className="admn-acontent">
            <div className="admn-atitle">
                Gestión de Asignaturas
            </div>

            <div className="admn-topButtons">
                <Popup trigger={<button className="admn-addbutton"> Añadir asignatura </button>} modal>
                    <div className="admn-test">
                        <div className="admn-poptitle" >
                            Añadiendo asignatura
                        </div>
                        <form className="admn-form" onSubmit={AddAsignatura}>
                            <label className="admn-label">
                                Ingrese nombre de asignatura
                            </label>
                            <input className="admn-input" type="text" placeholder="Lenguaje..." ref={newAsignatura}></input>

                            <button type="submit" className="admn-submit"> Añadir</button>
                        </form>
                    </div>
                </Popup>
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