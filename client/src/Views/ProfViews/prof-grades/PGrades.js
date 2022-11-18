import React, { useEffect, useRef, useContext, useState } from "react";
import "./PGrades.css";
import Lottie from "lottie-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../../../context/context"
import axios from "axios"

// IMAGES
import sefirot from "../../../imgs/Ellipse.png";
import cursos from "../../../imgs/reading-boy.json";

const PGrades = () => {

    const { user, dispatch } = useContext(Context);  

    const [ Listcursos, setListcursos ] = useState([]);

    const navigate = useNavigate();
    
    const getCursos = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/prof/verCursoAsignaturas", {
                rut:user.rut
            })
            setListcursos(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getCursos()}, []);

    return (

        <div>

            <button className="back-button" onClick={() => navigate("/profesor/profile")}> Volver </button>
            
            <div className="content-cursos">

                <div className="cursos-encabezado">
                    <div className="t-profile">
                        Cursos
                    </div>

                    <div className="cursos-infogroup">
                        <div className="cursos-pnombre">
                            {user.pnombre + " " + user.apellidop + " " + user.apellidom}
                        </div>
                        <div className="cursos-pcorreo">
                            {user.correo}
                        </div>
                        <div className="cursos-prut">
                            {user.rut}
                        </div>
                    </div>
                </div>


                <div className="cursos-body">
                    <div className="cursos-list">
                        
                        {
                            Listcursos.map((curso,index) => {
                                return (
                                    <li key={curso._id}>
                                        <Link to={`${curso._id}`}  key={index}>
                                            <button className="home-button">
                                                {curso.nombre}
                                            </button>
                                        </Link>
                                    </li>
                                    
                                )
                            })
                        }

                        
                    </div>
                    <Lottie animationData={cursos} loop={true} autoPlay ={true}  className="imag-cursos" ></Lottie>
                </div>

                <img className="nubesita" src = {sefirot} alt="FondoEducador"/>

            </div>
            
        </div>
        
    );
};


export default PGrades;