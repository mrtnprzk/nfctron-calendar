import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function Home() {
    const localizer = momentLocalizer(moment)
    const events = [
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
    ]

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
        />
    )
}
