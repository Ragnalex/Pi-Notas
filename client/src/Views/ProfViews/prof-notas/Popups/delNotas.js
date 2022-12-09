//utilities
import axios from "axios";
import Popup from "reactjs-popup";

//ico
import delIco from "../../../../imgs/trash.svg";

//style
import "./delNotas.css";

const DelNota = (alumno) => {

    const handleDelete = async (notaDel) => {
        try {
            const res = await axios.delete("http://localhost:5000/api/prof/eliminarNotaAlumno", {
                id: alumno.notas
            })
            alert("Nota " + notaDel.numero + " ha sido eliminada exitosamente");
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Popup trigger={<button className="admn-btn"><img src={delIco} className="material-icons"></img></button>} modal>
            <div className="admn-popContent">
                <div className="admn-popuptitle" >
                    ¿Esta seguro de eliminar la nota {alumno.notas.numero}?

                </div>
                <div className="admn-delModalbuttons">
                    <button onClick={() => handleDelete(alumno.notas)} className="admn-delModalbtn"> Eliminar</button>
                    <button className="admn-submit"> Cancelar</button>
                </div>

            </div>
        </Popup>
    )
}

export default DelNota;