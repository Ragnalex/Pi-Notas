import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfISOWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import parseISO from "date-fns/parseISO";
import "./Calendar.css"
import Lottie from "lottie-react";
import axios from "axios";


//IMG
import calendarimg from "../../imgs/calendar-december-25.json"


import Popup from "reactjs-popup"

const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})



const Calendario = (props) => {

    const [currentevent, setcurrentevent] =useState({})
    const [openpopup, setopenpopup] = useState(false)
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" , descipcion: ""})
    const [allEvents, setAllEvents] = useState([])


    async function handleAddEvents() {
        /*setAllEvents([...allEvents, {...newEvent,id: allEvents.length}])*/
        await axios.post("http://localhost:5000/api/prof/ingresarEvento", {
            nombre:newEvent.title,
            descripcion:newEvent.descipcion,
            fecha:newEvent.start,
            idCurso:props.idcurso
            }
        ) 
        window.location.reload();   
    }
    async function deleteEvent(){
        await axios.post("http://localhost:5000/api/prof/eliminarEvento",{
            idEvento:currentevent.id
            }
        )
        window.location.reload();
    }

    const getallEvent= async () => {
        
        const resultado = await axios.post("http://localhost:5000/api/prof/ObtenerEventos", {
            idCurso: props.idcurso
        })
        if (resultado.status==200){
                const formatevents = resultado.data.map((evento) => {
                    return{
                        title:evento.nombre,
                        start:evento.fecha,
                        end:evento.fecha,
                        descipcion:evento.descripcion,
                        id:evento._id
                    }
                })
                setAllEvents(formatevents)
        }
        

    }
    useEffect(() => {
        getallEvent()
    },[])

    const popup_event = () => {


        return (
            <div className="popup-bg">
                <div className="popup-content-nuevo">
                    <div>
                        <h2>Eliminar evento</h2>
                        <p>Al eliminar el evento no se podrá recuperar, ¿Quieres realizar esta acción?</p>
                    </div>
                    <div className="popup-buttons">
                        <button onClick={() => deleteEvent()} className="popup-button delete">Eliminar</button>
                        <button onClick={() => setopenpopup(false)} className="popup-button cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Popup trigger={<button className="calendario"> Calendario de Evaluaciones </button>} modal>
                <div className="calendar-prueba">

                    <h3 Calendario de Eventos></h3>
                    <Calendar
                        localizer={localizer}
                        events={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={(e) => {
                            setcurrentevent(e);
                            setopenpopup(true);
                            
                        }}
                        style={{ height: 500, margin: "50px" }}
                    />
                    {props.tipo == "profesor" &&
                    <div>
                        <div className="calendar-titulo"> Agregar Evento </div>
                        <div className="calendar-ordenar">

                            <input
                                type="text"
                                placeholder="Evento"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Descripción"
                                value={newEvent.descripcion}
                                onChange={(e) => setNewEvent({ ...newEvent, descipcion: e.target.value })}
                            />

                            <DatePicker
                                placeholderText="Fecha del Evento"
                                selected={newEvent.start}
                                onChange={(start) => setNewEvent({ ...newEvent, start: start, end: start })}

                            />

                            <button onClick={handleAddEvents}> Agregar Evento</button>
                            <Lottie animationData={calendarimg} loop={true} autoPlay={true} className="calendar-imag"></Lottie>
                        </div>

                    </div>
                    }
                </div>
                {openpopup ? popup_event() : (null)}
            </Popup>

        </div>
    );


};


export default Calendario;