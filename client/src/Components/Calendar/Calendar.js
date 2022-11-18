import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfISOWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import parseISO from "date-fns/parseISO";
import "./Calendar.css"
import Lottie from "lottie-react";


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

const events = [
    {
        title: "hola",
        allDay: true,
        start: new Date(2022, 10, 16),
        end: new Date(2022, 10, 16)
    },
    {
        title: "hola",
        allDay: true,
        start: new Date(2022, 10, 16),
        end: new Date(2022, 10, 16)
    }

]

const Calendario = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvents() {
        setAllEvents([...allEvents, newEvent])
    }

    console.log(newEvent)

    return (
        <div>
            <Popup trigger={<button className="admn-addbutton"> Calendario </button>} modal>
                <div className="home-prueba">

                    <h3 Calendario de Eventos></h3>
                    <Calendar
                        localizer={localizer}
                        events={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500, margin: "50px" }}
                    />

                    <div>
                        <div className="calendar-titulo"> Agregar Evento </div>
                        <div className="home-ordenar">
                            
                            <input
                                type="text"
                                placeholder="Add Title"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                            <DatePicker
                                placeholderText="Fecha Inicio"
                                selected={newEvent.start}
                                onChange={(start) => setNewEvent({ ...newEvent, start })}
                                
                            />
                            <DatePicker
                                placeholderText="Fecha Final"
                                selected={newEvent.end}
                                onChange={(end) => setNewEvent({ ...newEvent, end })}
                            />


                            <button onClick={handleAddEvents}> Add Event</button>

                        </div>
                        <Lottie animationData={calendarimg} loop={true} autoPlay={true} className="calendar-imag"></Lottie>
                    </div>
                </div>
            </Popup>

        </div>
    );


};


export default Calendario;