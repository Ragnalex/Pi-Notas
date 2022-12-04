
//utilities
import axios from "axios";
import Popup from "reactjs-popup";

//style
import "./asignPopup.css";
//ico
import delIco from "../../../../../imgs/bookIco.svg"

const AsignPopup = (curso) => {
    return(
        <Popup open={false} modal>
            <div className="admn-popContent">
                <div className="admn-popuptitle" >
                   Probando asignatura popup

                </div>
                

            </div>
        </Popup>
    )
}

export default AsignPopup;