
//utilities
import axios from "axios";
import Popup from "reactjs-popup";

//ico
import delIco from "../../../../../imgs/trash.svg"

//style
import "./delPopup.css";

const DelPopUp = (props) => {

    const handleDelete = async (cursoDel) => {
        try {
            const res = await axios.delete("http://localhost:5000/api/admin/eliminarCurso", {
                id: cursoDel._id
            })
            alert("Curso " + cursoDel.nombre + " " + cursoDel.paralelo + " Eliminado exitosamente.");
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Popup trigger={<button className="admn-btn"><img src={delIco} className="material-icons"></img></button>} modal>
            <div className="admn-popContent">
                <div className="admn-popuptitle" >
                    ¿Esta seguro de eliminar {props.curso.nombre} {props.curso.paralelo} del año {props.curso.año}?

                </div>
                <div className="admn-delModalbuttons">
                    <button onClick={() => handleDelete(curso.curso)} className="admn-delModalbtn"> Eliminar</button>
                    <button className="admn-submit"> Cancelar</button>
                </div>

            </div>
        </Popup>
    )
}

export default DelPopUp;