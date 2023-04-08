import moment from 'moment'
import { FC } from 'react'
import { Calendar, momentLocalizer, type Event } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

interface BigCalendarProps {
    events: Event[]
    handleSelectSlot: (event: Event) => void
    handleSelectEvent: (event: Event) => void
}

//to start week from monday
moment.locale('en-US', {
    week: {
        dow: 1,
        doy: 1,
    },
})

const BigCalendar: FC<BigCalendarProps> = ({ events, handleSelectSlot, handleSelectEvent }) => {
    const localizer = momentLocalizer(moment)

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '90vh', padding: '0.5rem' }}
            className="bg-white shadow-xl rounded-md"
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            views={['month', 'week', 'day']}
        />
    )
}

export default BigCalendar
