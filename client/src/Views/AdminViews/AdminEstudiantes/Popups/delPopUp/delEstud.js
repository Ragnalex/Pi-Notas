
import Popup from "reactjs-popup";
import axios from "axios";


const handleDelete= async() => {
    
        try {
            const res = axios.post("http://localhost:5000/api/admin/eliminarAsignatura", {
                id: asignatura._id
            })
            alert(asignatura.nombre + " Ha sido eliminado exitosamente.");
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    
}

const Delestud = (props) => {

    return (
        <Popup trigger={<button className="admn-delbtn"><img src={editIco} className="admn-delIco"></img></button>} onClose={closeModal} modal>
            <div className="admn-test">
                <div className="admn-poptitle" >
                    ¿Esta seguro de eliminar {props.alumno.nombre} ?

                </div>

                <div className="admn-delModalbuttons">
                    <button onClick={() => handleDelete(alumno)} className="admn-delModalbtn"> Eliminar</button>
                    <button onClick={() => closeModal} className="admn-submit"> Cancelar</button>
                </div>

            </div>
        </Popup>
    )

}

export default Delestud;
