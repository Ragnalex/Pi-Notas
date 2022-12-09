import React, { useEffect, useRef, useContext, useState } from "react";
import "./eNotas.css";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Context } from "../../../context/context";


//IMAGES
import sefirot from "../../../imgs/Ellipse.png";

const ENotas = () => {

    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    const [Asignaturas, setAsignaturas] = useState([])

    const handleLogout = () => {        //Metodo de cierre de sesión para el boton
        dispatch({ type: "LOGOUT" });
        navigate("/")
    }

    const getAsignaturas = async () => {
        //Funcion utilizada para traer todas las asignaturas asignadas al curso que posee el estudiante

        try {
            const res = await axios.post("http://localhost:5000/api/alum/verAsignaturas", {
                idCurso: user.curso
            })
            setAsignaturas(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getNotas = (idAsignatura) => {
        //Funcion utilizada para obtener las notas ordenadas que posea el estudiante con la idAsignatura correspondiente

        try {
            const listNotas = [];
            for (let i = 0; i < user.notas.length; i++) {
                if (idAsignatura == user.notas[i].asignatura) {
                    listNotas[i] = user.notas[i].calificacion
                }
            }
            return (listNotas);

        } catch (error) {
            console.log(error)
        }
    }

    const getProm = () => {

        //Funcion utilizada para calcular los promedios por asignatura

        let total = 0;
        for (let i = 0; i < user.notas.length; i++){
            total = total + user.notas[i].calificacion;
            
        }
        return (total/user.notas.length)
    }

    useEffect(() => { getAsignaturas() }, []);

    return (
        <div className="admn-estuall">
            <div className="admn-econtent">
                <div className="est-encabezado">

                    <div className="t-profile">
                        Calificaciones
                    </div>

                    <div className="est-info-group">
                        <div className="est-nombre">
                            {user.pnombre + " " + user.apellidop + " " + user.apellidom}
                        </div>

                        <div className="est-rut">
                            {user.rut}
                        </div>
                    </div>

                    <button onClick={handleLogout} className="back-button"> Volver </button>

                </div>

                <button className="calendario">Calendario de Actividades</button>
                
                {/*Sección que muestra notas del alumno por asignatura */}
                <div className="table-content">
                    <div>
                        <table className="datatable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Asignatura</th>
                                    <th>N1</th>
                                    <th>N2</th>
                                    <th>N3</th>
                                    <th>N4</th>
                                    <th>N5</th>
                                    <th>N6</th>
                                    <th>N7</th>
                                    <th>N8</th>
                                    <th>Promedio</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Asignaturas.map((asignatura, index) =>{
                                        return (

                                            <tr>
                                                <td><span className="aviable"></span></td>
                                                <td>{asignatura.nombre}</td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 0 &&
                                                    getNotas(asignatura._id)[0]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 1 &&
                                                    getNotas(asignatura._id)[1]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 2 &&
                                                    getNotas(asignatura._id)[2]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 3 &&
                                                    getNotas(asignatura._id)[3]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 4 &&
                                                    getNotas(asignatura._id)[4]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 5 &&
                                                    getNotas(asignatura._id)[5]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 6 &&
                                                    getNotas(asignatura._id)[6]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 7 &&
                                                    getNotas(asignatura._id)[7]}
                                                </td>
                                                <td>
                                                    {getNotas(asignatura._id).length > 0 &&
                                                        getProm()}
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
            <img className="nubesita" src={sefirot} alt="FondoEducador" />
        </div>
    );
}

export default ENotas;