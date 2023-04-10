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

    const addEventHandler = (title: string, date: any) => {
        const sameTitle = !!events.find((event) => event.title === title)

        //TODO: add error message it cannot have same title
        if (sameTitle) return

        const start = new Date(date.startDate)
        const end = new Date(date.endDate)

        setEvents((prevEvents: Event[]) => [...prevEvents, { title, start, end }])
        setOpenAdd(false)
    }

    //Logic to modify or delete existing event
    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setOpenModify(true)
    }

    const modifyEventHandler = (title: string, date: any) => {
        const start = new Date(date.startDate)
        const end = new Date(date.endDate)

        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents, { title, start, end }])
        setOpenModify(false)
    }

    const deleteEventHandler = () => {
        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents])
        setOpenModify(false)
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
            <FormModify
                openModify={openModify}
                setOpenModify={setOpenModify}
                selectedEvent={selectedEvent}
                modifyEventHandler={modifyEventHandler}
                deleteEventHandler={deleteEventHandler}
            />
        </>
    )
}
