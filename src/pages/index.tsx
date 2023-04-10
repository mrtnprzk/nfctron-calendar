import { useState } from 'react'
import { type Event } from 'react-big-calendar'
import { toast } from 'react-hot-toast'

import BigCalendar from '@/components/BigCalendar/BigCalendar'
import FormEvent from '@/components/Forms/FormEvent'
import { FORM_TYPE } from '@/components/Forms/constants'
import { yesterday } from '@/lib/dates'
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types'

export default function Home() {
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<null | Event>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [formType, setFormType] = useState<string>('')

    //Logic to add new event
    const handleSelectSlot = (event: Event) => {
        if (event.start! < yesterday) return toast.error('You cannot add events older than today.')

        setFormType(FORM_TYPE.ADD)
        setSelectedEvent(event)
        setIsOpen(true)
    }

    const addEventHandler = (title: string, date: DateValueType) => {
        const sameTitle = !!events.find((event) => event.title === title)

        if (sameTitle) return toast.error('You cannot have two same titles of event.')

        const start = new Date(date?.startDate!)
        const end = new Date(date?.endDate!)

        setEvents((prevEvents: Event[]) => [...prevEvents, { title, start, end }])
        setIsOpen(false)

        toast.success('Event successfully added!')
    }

    //Logic to modify or delete existing event
    const handleSelectEvent = (event: Event) => {
        setFormType(FORM_TYPE.MODIFY)
        setSelectedEvent(event)
        setIsOpen(true)
    }

    const modifyEventHandler = (title: string, date: DateValueType) => {
        const sameTitle = !!events.find((event) => event.title === title)
        if (selectedEvent?.title !== title && sameTitle) return toast.error('You cannot have two same titles of event.')

        const start = new Date(date?.startDate!)
        const end = new Date(date?.endDate!)

        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents, { title, start, end }])
        setIsOpen(false)

        toast.success('Event successfully modified!')
    }

    const deleteEventHandler = () => {
        const filteredEvents = events.filter((event) => event.title !== selectedEvent?.title)
        setEvents([...filteredEvents])
        setIsOpen(false)

        toast.success('Event successfully deleted!')
    }

    return (
        <>
            <BigCalendar events={events} handleSelectSlot={handleSelectSlot} handleSelectEvent={handleSelectEvent} />
            <FormEvent
                formType={formType}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedEvent={selectedEvent}
                addEventHandler={addEventHandler}
                modifyEventHandler={modifyEventHandler}
                deleteEventHandler={deleteEventHandler}
            />
        </>
    )
}
