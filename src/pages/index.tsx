import { useState } from 'react'
import { type Event } from 'react-big-calendar'

import BigCalendar from '@/components/BigCalendar/BigCalendar'
import FormAdd from '@/components/Forms/FormAdd'
import FormModify from '@/components/Forms/FormModify'

export default function Home() {
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<null | Event>(null)
    const [openAdd, setOpenAdd] = useState(false)
    const [openModify, setOpenModify] = useState(false)

    //Logic to add new event
    const handleSelectSlot = (event: Event) => {
        setSelectedEvent(event)
        setOpenAdd(true)
    }

    const addEventHandler = (title: string, startDate: string, endDate: string) => {
        const start = new Date(startDate)
        const end = new Date(endDate)

        setEvents((prevEvents: Event[]) => [...prevEvents, { title, start, end }])
        setOpenAdd(false)
    }

    //Logic to modify existing event
    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setOpenModify(true)
    }

    return (
        <>
            <BigCalendar events={events} handleSelectSlot={handleSelectSlot} handleSelectEvent={handleSelectEvent} />
            <FormAdd
                openAdd={openAdd}
                setOpenAdd={setOpenAdd}
                selectedEvent={selectedEvent}
                addEventHandler={addEventHandler}
            />
            <FormModify openModify={openModify} setOpenModify={setOpenModify} selectedEvent={selectedEvent} />
        </>
    )
}
