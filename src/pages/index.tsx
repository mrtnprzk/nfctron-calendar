import BigCalendar from '@/components/BigCalendar/BigCalendar'
import FormAdd from '@/components/Forms/FormAdd'
import FormModify from '@/components/Forms/FormModify'
import { useCallback, useState } from 'react'
import { type Event } from 'react-big-calendar'

export default function Home() {
    const [events, setEvents] = useState<Event[]>([
        {
            title: 'My Event',
            start: new Date(),
            end: new Date(),
        },
    ])
    const [selectedEvent, setSelectedEvent] = useState<null | Event>(null)
    const [openAdd, setOpenAdd] = useState(false)
    const [openModify, setOpenModify] = useState(false)

    const handleSelectSlot = useCallback(
        (event: Event) => {
            setSelectedEvent(event)
            setOpenAdd(true)
        },
        [setEvents],
    )

    const handleSelectEvent = useCallback((event: Event) => {
        setSelectedEvent(event)
        setOpenModify(true)
    }, [])

    return (
        <>
            <BigCalendar events={events} handleSelectSlot={handleSelectSlot} handleSelectEvent={handleSelectEvent} />
            <FormAdd openAdd={openAdd} setOpenAdd={setOpenAdd} />
            <FormModify openModify={openModify} setOpenModify={setOpenModify} />
        </>
    )
}
