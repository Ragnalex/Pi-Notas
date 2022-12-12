import "./addNota.css"
import Popup from "reactjs-popup";
import { useState, useRef } from "react";
import axios from "axios";
import add_circle from "../../../../../imgs/plus-circle.png";

const AddNota = (props) => {

    const [errorNota, seterrorNota] = useState(false);
    const nota = useRef();
    const numero = useRef();

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/prof/asignarNotaAlumno", {
                rut: props.alumno.rut,
                idAsignatura: props.asignatura,
                calificacion: nota.current.value,
                ponderacion: 20,
                numero: numero.current.value
            })
        } catch (error) {
            seterrorNota(true);
        }
        
    }

    return (

        <Popup trigger={<button className="admn-editBtn"><img className="material-icons" src={add_circle} alt="añadir" /></button>} modal>

            <div className="Prof-addpopContent">
                <div className="prof-addpopuptitle" >
                    Añadiendo nuevo curso
                </div>

                <form className="prof-addpopupForm" onSubmit={handleSubmit}>
                    <div className="admn-popupSelect">
                        <label className="admn-popupLabel">
                            Número de prueba
                        </label>
                        <select  ref={numero} className="admn-popupOptions" placeholder="Prueba parcial número..." required>
                            <option value={null}> Prueba número... </option>
                            <option value="1">Prueba 1</option>
                            <option value="2">Prueba 2</option>
                            <option value="3">Prueba 3</option>
                            <option value="4">Prueba 4</option>
                            <option value="5">Prueba 5</option>
                            <option value="6">Prueba 6</option>
                            <option value="7">Prueba 7</option>
                            <option value="8">Prueba 8</option>
                            
                        </select>
                    </div>


                    <div className="admn-popupSelect">
                        <label className="admn-popupLabel">
                            Ingrese Nota
                        </label>
                        {errorNota ?
                        (
                            <div className="prof-texterror">
                            <input type="number" ref={nota} className="prof-inputFormError" placeholder="fallida...." required />
                            Ingrese nota valida </div>)
                        :
                        <input type="text" ref={nota} className="prof-inputForm" placeholder="nota...." required />
                        }
                    </div>

                    <button type="submit"> Añadir</button>
                </form>
            </div>
        </Popup>

        )
       
    
}


export default AddNota;