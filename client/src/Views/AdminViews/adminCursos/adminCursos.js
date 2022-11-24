//Style
import "./adminCursos.css"

//utilities
import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Popup from "reactjs-popup"

//ico
import editIco from "../../../imgs/pencil.png"
import calendarIco from "../../../imgs/calendarIco.png"
import bottomCloud from "../../../imgs/Ellipse.png"
import addCircle from "../../../imgs/plus-circle.png"

const AdminCursos = () => {

    const [ cursos, setCursos ] = useState([]);
    const nuevoCursoRef = useRef();
    const paraleloCursoRef = useRef();
    const anioCursoRef = useRef();

    const navigate = useNavigate();

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20),( val, index) => index + year);

    const getCursos = async() => {
        try {
            const res = await axios.get("http://localhost:5000/api/admin/verCursos")
            const sortData = res.data.sort((elem1, elem2) => elem1.nombre - elem2.nombre )
            setCursos(sortData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/admin/ingresarCurso", {
                nombre: nuevoCursoRef.current.value,
                paralelo:paraleloCursoRef.current.value,
                año:anioCursoRef.current.value,
            })
            alert("Curso creado exitosamente");
        } catch (error) {
            console.log(error)
        }
    }

    

    useEffect(() => {getCursos()}, []);

    return(
        <div className="admn-cursosall">
            <div className="admn-ccontent">
                <div className="admn-topcontent">
                    <div className="admn-ctitle">
                        Gestión de cursos
                    </div>
                    <button onClick={() => navigate("/administrador/inicio")} className="back-button"> Volver </button>
                </div>
                
                <div className="admn-tools">
                    

                    <Popup trigger={<button className="admn-addBtn">
                                    <img className="material-icons" src = {addCircle} alt="añadir"/>
                                    </button>} modal>

                        <div className="admn-popContent">
                            <div className="admn-popuptitle" >
                                Añadiendo nuevo curso
                            </div>
                            <form className="admn-popupForm" onSubmit={handleSubmit}>
                                <div className="admn-popupSelect">
                                    <label className="admn-popupLabel">
                                        Seleccione curso
                                    </label>
                                    <select ref={nuevoCursoRef} className="admn-popupOptions" placeholder="año....">
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
                                    <select ref={paraleloCursoRef} className="admn-popupOptions" placeholder="año....">
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
                                    <select ref={anioCursoRef} className="admn-popupOptions" placeholder="año....">
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
                    </Popup>
                </div>
                

                <div className="admn-bodycursos">

                    <div className="admn-tablecursos">

                        {/*Tabla de notas*/}
                        <div>
                            
                            <table className="admn-datatable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>N°</th>
                                        <th>Nombre</th>
                                        <th>Paralelo</th>
                                        <th>año</th>
                                        <th>Editar</th>
                                        <th>Calendario</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>

                                <tbody>

                                {
                                    cursos.map((curso, index) => {      
                                        

                                        return(
                                            
                                            <tr key={index}>
                                            <td></td>
                                            <td>{index+1}</td>
                                            <td>{curso.nombre}</td>
                                            <td>{curso.paralelo}</td>
                                            <td>{curso.año}</td>
                                            <td>
                                                <button className="admn-btn">
                                                    <img className="material-icons" src = {editIco} alt="editar"/>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="admn-btn">
                                                    <img className="material-icons" src = {calendarIco} alt="calendario"/>
                                                </button>
                                            </td>
                                            <td></td>
                                            </tr>
                                            
                                            
                                        )
                                    })
                                }
                                
                                </tbody>
                            </table>
                        
                        </div>

                        
                    </div>
                    
                </div>

                

            </div>

            <img className="admn-nubesita" src = {bottomCloud} />
        
        </div>
    )
}

export default AdminCursos;