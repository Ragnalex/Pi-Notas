//Css import
import "./admnHome.css"

//react utilities
import { useNavigate } from "react-router-dom";

//animation
import Lottie from "lottie-react";

//img
import configAnim from "../../../imgs/configAnim.json"

const AdmnHome = () => {

    const navigate = useNavigate();


    return(
        <div className="admn-hcontent">
                <div name="Encabezado" className="admn-htitulo">
                    Gestión de datos
                </div>

                <div className="admn-body">

                    <Lottie animationData={configAnim} loop={true} autoPlay={true} className="admn-img"></Lottie>
                    <div name="buttons content" className="adm-bcontent">
                        <button className="opt-button"> Gestionar profesores</button>
                        <button className="opt-button" onClick={() => navigate("/administrador/asignaturas")}> Gestionar asignaturas </button>
                        <button className="opt-button"> Gestionar cursos </button>
                        <button className="opt-button"> Gestionar estudiantes </button>
                    </div>
                </div>

                
                
        </div>


    )



}

export default AdmnHome;