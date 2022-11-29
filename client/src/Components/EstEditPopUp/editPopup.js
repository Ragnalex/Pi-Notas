//utilities
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

//style
import "./editPopup.css";

//ico
import editIco from "../../imgs/pencil.png"



const EditPopup = ({estudiante}) => {

    const [ curso, setCurso] = useState();

    const [editRut, seteditRut] = useState(false);

    const [editpNombre, seteditpNombre] = useState(false);

    const [editsNombre, seteditsNombre] = useState(false);

    const [editApellidop, seteditApellidop] = useState(false);

    const [editApellidom, seteditApellidom] = useState(false);

    const [editCurso, seteditCurso] = useState(false);

    const getCurso = async() => {
        try {
            const res = await axios.post("http://localhost:5000/api/alum/ObtenerCurso", {
                id:estudiante.curso
            })
            setCurso(res.data.nombre);
        } catch (error) {
            setCurso("No Asignado");
        }
    }

    useEffect(() => {getCurso()}, [])

    return (


        <Popup trigger={<button className="admn-editBtn"><img className="admn-editIco" src={editIco} alt="editar" /></button>} modal>
            <div className="admn-popEstContent">
                <div>
                    <div className="admn-popupEsttitle">
                        Información Estudiantil
                    </div>
                </div>
                
                <form className="admn-popupEstForm">
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Rut Estudiante
                        </label>
                        <div className="admn-infocontent">
                            {
                            editRut ? (<input className="admn-popupEstinput" placeholder={estudiante.rut}/>) //Ocurre esto si editRut es true
                            : 
                            (<div className="admn-popupText">{estudiante.rut}</div>)         //Ocurre esto si editRut es false
                            }
                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editRut)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                        
                        
                    </div>
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Primer Nombre
                        </label>
                        <div className="admn-infocontent">
                        {
                            editpNombre ? (<input className="admn-popupEstinput" placeholder={estudiante.pnombre}/>)
                            :
                            (<div className="admn-popupText">{estudiante.pnombre}</div>)

                        }
                        <button className="admn-handleIco" type="button" onClick={() => seteditpNombre(!editpNombre)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                        
                    </div>
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Segundo Nombre
                        </label>
                        <div className="admn-infocontent">
                        {
                            editsNombre ? (<input className="admn-popupEstinput" placeholder={estudiante.snombre}/>)
                            :
                            (<div className="admn-popupText">{estudiante.snombre}</div>)
                        }
                        <button className="admn-handleIco" type="button" onClick={() => seteditsNombre(!editsNombre)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Apellido Paterno
                        </label>
                        <div className="admn-infocontent">
                        {
                            editApellidop ? (<input className="admn-popupEstinput" placeholder={estudiante.apellidop}/>)
                            :
                            (<div className="admn-popupText">{estudiante.apellidop}</div>)
                        }
                        <button className="admn-handleIco" type="button" onClick={() => seteditApellidop(!editApellidop)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                        
                    </div>
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Apellido Materno
                        </label>
                        <div className="admn-infocontent">
                        {
                            editApellidom ? (<input className="admn-popupEstinput" placeholder={estudiante.apellidom}/>)
                            :
                            (<div className="admn-popupText">{estudiante.apellidom}</div>)
                        }
                        <button className="admn-handleIco" type="button" onClick={() => seteditApellidom(!editApellidom)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Curso
                        </label>
                        <div className="admn-infocontent">
                        {
                            editCurso ? (<input className="admn-popupEstinput" placeholder={curso}/>)
                            :
                            (<div className="admn-popupText">{curso}</div>)
                        }
                        <button className="admn-handleIco" type="button" onClick={() => seteditCurso(!editCurso)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                        
                    </div>

                    
                <button type="submit">submit</button>
                </form>

            </div>
        </Popup>
    )
}
    export default EditPopup;