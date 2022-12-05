//utilities
import { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

//style
import "./editProf.css";

//ico
import editIco from "../../../../../imgs/pencil.png";

const EditProf = ({profesor}) => {
    const [curso, setCurso] = useState();
    const [listCursos, setlistCursos] = useState([]);
    const [editRut, seteditRut] = useState(false);
    const [editpNombre, seteditpNombre] = useState(false);
    const [editsNombre, seteditsNombre] = useState(false);
    const [editApellidop, seteditApellidop] = useState(false);
    const [editApellidom, seteditApellidom] = useState(false);
    const [editCurso, seteditCurso] = useState(false);

    const rutRef = useRef();
    const pnombreRef = useRef();
    const snombreRef = useRef();
    const apellidopRef = useRef();
    const apellidomRef = useRef();
    const cursoRef = useRef();

    const getCurso = async(e) => {
        try {
            const res = await axios.post("http://localhost:5000/api/prof/ObtenerJefatura", {
                id:profesor.jefatura
            })
            setCurso(res.data.nombre + " " + res.data.año);

            const res2 = await axios.get("http://localhost:5000/api/admin/verCursos");
            setlistCursos(res2.data);
        }catch{
            setCurso("No Asignado");
        }
    }

    useEffect(() => {getCurso()}, [])

    return (
        <Popup trigger={<button className="admn-editBtn"><img className="admn-editIco" src={editIco} alt="editar" /></button>} modal>
            {/* Ventana para edición de profesores */}
            <div className="admn-popEstConstent">
                <div>
                    <div className="admn-popupEsttitle">
                        Información del Profesorado
                    </div>
                </div>

                <form className="admn-popupEstForm">
                    {/* Editar rut de profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Rut Profesor
                        </label>

                        <div className="admn-infocontent">
                            {
                                editRut ? (<input className="admn-popupEstinput" placeholder={profesor.rut} ref={rutRef}/>) //Ocurre esto si editRut es true
                                : 
                                (<div className="admn-popupText">{profesor.rut}</div>)         //Ocurre esto si editRut es false
                            }

                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editRut)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>

                    {/* Editar primer nombre profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Primer Nombre
                        </label>

                        <div className="admn-infocontent">
                            {
                                editpNombre ? (<input className="admn-popupEstinput" placeholder={profesor.pnombre} ref={pnombreRef}/>)
                                : 
                                (<div className="admn-popupText">{profesor.pnombre}</div>)  
                            }

                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editpNombre)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>

                    {/* Editar segundo nombre de profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Segundo Nombre
                        </label>

                        <div className="admn-infocontent">
                            {
                                editsNombre ? (<input className="admn-popupEstinput" placeholder={profesor.snombre} ref={snombreRef}/>) 
                                : 
                                (<div className="admn-popupText">{profesor.snombre}</div>) 
                            }

                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editsNombre)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>

                    {/* Editar apellido paterno del profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Apellido Paterno
                        </label>

                        <div className="admn-infocontent">
                            {
                                editApellidop ? (<input className="admn-popupEstinput" placeholder={profesor.apellidop} ref={apellidopRef}/>) 
                                : 
                                (<div className="admn-popupText">{profesor.apellidop}</div>) 
                            }

                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editApellidop)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>

                    {/* Editar apellido materno del profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Apellido Materno
                        </label>

                        <div className="admn-infocontent">
                            {
                                editApellidom ? (<input className="admn-popupEstinput" placeholder={profesor.apellidom} ref={apellidomRef}/>) 
                                : 
                                (<div className="admn-popupText">{profesor.apellidom}</div>) 
                            }

                            <button className="admn-handleIco" type="button" onClick={() => seteditRut(!editApellidom)}><img className="admn-ico" src={editIco} /></button>
                        </div>
                    </div>

                    {/* Editar jefatura de profesor */}
                    <div className="admn-popupEstBox">
                        <label className="admn-popupEstLabel">
                            Jefatura
                        </label>

                        <div className="admn-infocontent">
                            {
                                editCurso ? 
                                (<select className="admn-popupEstinput" ref={cursoRef}>
                                    <option value={curso}>
                                        {curso}
                                    </option>
                                    {
                                        listCursos.map((curso, index) => {
                                            return(
                                                <option value={curso._id}>{curso.nombre + " " + curso.año}</option>
                                            )
                                        })
                                    }
                                </select>)
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
export default EditProf;