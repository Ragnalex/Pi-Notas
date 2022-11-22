import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-web";
import Calendario from "../../components/Calendar/Calendar";




//IMG
import imgEducador from "../../imgs/mainImg.svg"

const Home = () => {

    const navigate = useNavigate();


    return (
        <div>
            <Calendario></Calendario>
            <button className="adm-button back-button" onClick={() => navigate("/administrador/login")}> Administrador </button>

            <div className="center">

                <div className="tittle">
                    Bienvenido al portal estudiantil π-notas
                </div>

                <div className="center">

                    <div className="botones">

                        <button onClick={() => navigate("/estudiante/login")} className="home-button">
                            Ingreso estudiantil
                        </button>

                        <button onClick={() => navigate("/profesor/login")} className="home-button">
                            Ingreso profesores
                        </button>

                    </div>

                    <img className="img" src={imgEducador} alt="FondoEducador" />


                </div>

            </div>

        </div>

    );


};


export default Home;