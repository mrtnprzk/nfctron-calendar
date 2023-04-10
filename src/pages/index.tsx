import { useState } from 'react'
import { type Event } from 'react-big-calendar'
import { toast } from 'react-hot-toast'

import BigCalendar from '@/components/BigCalendar/BigCalendar'
import FormAdd from '@/components/Forms/FormAdd'
import FormModify from '@/components/Forms/FormModify'
import { yesterday } from '@/lib/dates'
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types'

export default function Home() {
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<null | Event>(null)
    const [openAdd, setOpenAdd] = useState(false)
    const [openModify, setOpenModify] = useState(false)

    //Logic to add new event
    const handleSelectSlot = (event: Event) => {
        if (event.start! < yesterday) return toast.error('You cannot add events older than today.')

        setSelectedEvent(event)
        setOpenAdd(true)
    }

    const addEventHandler = (title: string, date: DateValueType) => {
        const sameTitle = !!events.find((event) => event.title === title)

        if (sameTitle) return toast.error('You cannot have two same titles of event.')

        const start = new Date(date?.startDate!)
        const end = new Date(date?.endDate!)

        setEvents((prevEvents: Event[]) => [...prevEvents, { title, start, end }])
        setOpenAdd(false)

        toast.success('Event successfully added!')
    }

    //Logic to modify or delete existing event
    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setOpenModify(true)
    }

    const modifyEventHandler = (title: string, date: DateValueType) => {
        const sameTitle = !!events.find((event) => event.title === title)
        if (sameTitle) return toast.error('You cannot have two same titles of event.')

        const start = new Date(date?.startDate!)
        const end = new Date(date?.endDate!)

        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents, { title, start, end }])
        setOpenModify(false)

        toast.success('Event successfully modified!')
    }

    const deleteEventHandler = () => {
        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents])
        setOpenModify(false)

        toast.success('Event successfully deleted!')
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
