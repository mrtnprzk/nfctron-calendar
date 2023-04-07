import BigCalendar from '@/components/BigCalendar/BigCalendar'

export default function Home() {
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

    return <BigCalendar events={events} />
}
