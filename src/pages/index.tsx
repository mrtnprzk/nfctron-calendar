import BigCalendar from '@/components/BigCalendar/BigCalendar'
import { useCallback, useState } from 'react'
import { type Event } from 'react-big-calendar'

export default function Home() {
    const [events, setEvents] = useState([
        {
            title: 'My Event',
            start: new Date(),
            end: new Date(),
        },
        {
            title: 'My Event2',
            start: new Date(),
            end: new Date(),
        },
        {
            title: 'My Event3',
            start: new Date(),
            end: new Date(),
        },
    ])

    const handleSelectSlot = useCallback(
        (event: Event) => {
            const title = window.prompt('New Event Name')
            console.log(event, title)
        },
        [setEvents],
    )

    const handleSelectEvent = useCallback((event: Event) => console.log(event), [])

    return <BigCalendar events={events} handleSelectSlot={handleSelectSlot} handleSelectEvent={handleSelectEvent} />
}
