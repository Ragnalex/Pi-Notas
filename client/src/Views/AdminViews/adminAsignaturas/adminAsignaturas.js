//Css import
import "./adminAsignaturas.css"

//utilities
import React, { useEffect, useRef, useContext, useState } from "react";
import { renderMatches, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup"

//middleware
import axios from "axios";

//ico import
import editIco from "../../../imgs/trash.svg"



const AdminAsignaturas = () => {

    const [Asignaturas, setAsignaturas ] = useState([]);
    const [opendelModal, setOpendelModal] = useState(false);
    const closeModal = () => setOpendelModal(false);

    const newAsignatura = useRef();

    const navigate = useNavigate();

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

    const handleDelete = async (asignatura) => {
        try {
            const res = axios.post("http://localhost:5000/api/admin/eliminarAsignatura", {
                id: asignatura._id
            })
            alert(asignatura.nombre + " Ha sido eliminado exitosamente.");

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {getAsignaturas()}, []);

    return(

        <div className="admn-acontent">
            <div className="admn-top">
                <div className="admn-atitle">
                    Gestión de Asignaturas
                </div>

                <button onClick={() => navigate("/administrador/inicio")} className="back-button"> Volver </button>
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
                
            </div>

            <div className="admn-listAsignaturas">
                {
                    Asignaturas.map((asignatura, index)=> {
                        return(
                            <div className="admn-filaAsignatura" key={index}>
                                <div className="admn-asignatura">
                                    {asignatura.nombre}
                                </div>
                                
                                
                                <Popup trigger={<button className="admn-delbtn"><img src={editIco} className="admn-delIco"></img></button>} onClose={closeModal} modal>
                                    <div className="admn-test">
                                        <div className="admn-poptitle" >
                                            ¿Esta seguro de eliminar {asignatura.nombre} ?
                                            
                                        </div>
                                        <div className="admn-delModalbuttons">
                                            <button onClick={() => handleDelete(asignatura)} className="admn-delModalbtn"> Eliminar</button>
                                            <button onClick={() => closeModal} className="admn-submit"> Cancelar</button>
                                        </div>
                                        
                                    </div>
                                </Popup>
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