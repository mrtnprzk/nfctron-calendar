import moment from 'moment'
import { FC } from 'react'
import { Calendar, DayPropGetter, momentLocalizer, type Event } from 'react-big-calendar'

import { today } from '@/lib/dates'
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

    //style for today cell
    const todayStyleGetter = (date: Date) => {
        if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        ) {
            return {
                className: 'today-cell',
                style: {
                    backgroundColor: '#1FE8AC',
                    opacity: 0.7,
                },
            }
        }
    }

    //Style for created event
    const eventStyleGetter = () => {
        const style = {
            backgroundColor: '#7F46DB',
            color: '#F7F5FF',
            opacity: 0.8,
        }
        return {
            style,
        }
    }

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
            eventPropGetter={eventStyleGetter}
            dayPropGetter={todayStyleGetter as DayPropGetter}
        />
    )
}

export default BigCalendar
