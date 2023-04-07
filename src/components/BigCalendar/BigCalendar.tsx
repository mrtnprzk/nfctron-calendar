import moment from 'moment'
import { FC } from 'react'
import { Calendar, momentLocalizer, type Event } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

interface BigCalendarProps {
    events: Event[]
}

const BigCalendar: FC<BigCalendarProps> = ({ events }) => {
    const localizer = momentLocalizer(moment)

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '90vh' }}
            className="bg-white p-1"
        />
    )
}

export default BigCalendar
