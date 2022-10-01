import React from "react";
import LoginImg from "../../imgs/PLoginImg.svg";
import "./pLogin.css";

const pLogin = () => {

    return (
        <div className="container">
            <div className="content">
                <div className="body">
                    <div className="titulo">
                        Ingreso Profesores
                    </div>
                    <form className="formBox">
                        <label className="label"> Correo Institucional </label>
                        <input className="input-box" type="text" id="fname" name="firstname" placeholder="profesor@colegio.cl"></input>

                        <label className="label">Contraseña</label>
                        <input className="input-box" type="text" id="lname" name="lastname" placeholder="***********"></input>

                                    
                    </form>
                    <button className="submit"> Login </button>
                </div>

                <img className="imag" src = {LoginImg} alt="FondoLoginProfesor"/>

                
            
                


            </div>



        </div>


    );
}


export default pLogin;