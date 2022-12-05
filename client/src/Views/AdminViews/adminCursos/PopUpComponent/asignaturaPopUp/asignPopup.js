
//utilities
import axios from "axios";
import Popup from "reactjs-popup";

//style
import "./asignPopup.css";
//ico
import bookIco from "../../../../../imgs/bookIco.svg"

const AsignPopup = (curso) => {
    return(
        <Popup trigger={<button className="admn-btn"><img src={bookIco} className="material-icons"></img></button>} modal>
            <div className="admn-popContent">
                <div className="admn-popuptitle" >
                   Probando asignatura popup

                </div>
                

            </div>
        </Popup>
    )
}

export default AsignPopup;