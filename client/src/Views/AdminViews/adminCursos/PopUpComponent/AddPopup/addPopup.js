
//utilities
import Popup from "reactjs-popup"
import { useRef, useState } from "react";
import axios from "axios";

//img
import addCircle from "../../../../../imgs/plus-circle.png"

//style
import "./addPopup.css"

const AddPopup = () => {

    const [success, setSuccess] = useState(false);
    const closeModal = () => setSuccess(false);

    const nuevoCursoRef = useRef();
    const paraleloCursoRef = useRef();
    const anioCursoRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/admin/ingresarCurso", {
                nombre: nuevoCursoRef.current.value,
                paralelo: paraleloCursoRef.current.value,
                año: anioCursoRef.current.value,
            })
            setSuccess(true);
        } catch (error) {
            console.log(error)
        }
    }

    return (

        success ?
        (
            <Popup open={success} closeOnDocumentClick onClose={closeModal} >
                <div className="admn-popContent">
                        <div className="admn-popupForm">
                            <div className="admn-successAddEst">
                                Curso Añadido con exito
                            </div>
                            <button className="admn-AddEstsubmitBtn" onClick={closeModal}> Aceptar </button>

                        </div>

                    </div>

            </Popup>
        )
        :
        (<Popup trigger={<button className="admn-addbutton"> Nuevo Curso </button>} modal>

            <div className="admn-popContent">
                <div className="admn-popuptitle" >
                    Añadiendo nuevo curso
                </div>

                <form className="admn-popupForm" onSubmit={handleSubmit}>
                    <div className="admn-popupSelect">
                        <label className="admn-popupLabel">
                            Seleccione curso
                        </label>
                        <select ref={nuevoCursoRef} className="admn-popupOptions" placeholder="año...." required>
                            <option value={null}> Curso... </option>
                            <option value="1° Básico">1° Básico</option>
                            <option value="2° Básico">2° Básico</option>
                            <option value="3° Básico">3° Básico</option>
                            <option value="4° Básico">4° Básico</option>
                            <option value="5° Básico">5° Básico</option>
                            <option value="6° Básico">6° Básico</option>
                            <option value="7° Básico">7° Básico</option>
                            <option value="8° Básico">8° Básico</option>
                            <option value="1° Medio">1° Medio</option>
                            <option value="2° Medio">2° Medio</option>
                            <option value="3° Medio">3° Medio</option>
                            <option value="4° Medio">4° Medio</option>
                        </select>
                    </div>


                    <div className="admn-popupSelect">
                        <label className="admn-popupLabel">
                            Seleccione Paralelo
                        </label>
                        <select ref={paraleloCursoRef} className="admn-popupOptions" placeholder="año...." required>
                            <option value={null}> Paralelo... </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>

                    </div>


                    <div className="admn-popupSelect">
                        <label className="admn-popupLabel">
                            Seleccione año
                        </label>
                        <select ref={anioCursoRef} className="admn-popupOptions" placeholder="año...." required>
                            <option value={null}> Año... </option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                        </select>
                    </div>

                    <button type="submit" className="admn-submit"> Añadir</button>
                </form>
            </div>
        </Popup>)
       
    )
}


export default AddPopup;