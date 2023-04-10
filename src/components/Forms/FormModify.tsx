import moment from 'moment'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { type Event } from 'react-big-calendar'
import { DateRangeType } from 'react-tailwindcss-datepicker/dist/types'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormModifyProps {
    openModify: boolean
    setOpenModify: Dispatch<SetStateAction<boolean>>
    selectedEvent: Event | null
    modifyEventHandler: (title: string, date: DateRangeType) => void
    deleteEventHandler: () => void
}

const FormModify: FC<FormModifyProps> = ({
    openModify,
    setOpenModify,
    selectedEvent,
    modifyEventHandler,
    deleteEventHandler,
}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState({
        startDate: '',
        endDate: '',
    })

    useEffect(() => {
        const eventTitle = selectedEvent?.title as string
        const startDate = moment(selectedEvent?.start).format('YYYY-MM-DD')
        const endDate = moment(selectedEvent?.end).format('YYYY-MM-DD')

        setTitle(eventTitle)
        setDate({
            startDate,
            endDate,
        })
    }, [openModify])

    return (
        <Modal open={openModify} setOpen={setOpenModify}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    modifyEventHandler(title, date)
                }}
            >
                <div className="bg-nfcPurpleLight p-3 md:p-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-lg font-bold leading-6 text-nfcPurpleDark">Modify Event</h3>
                        <Input
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={(e: any) => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Pick Date"
                            name="start-date"
                            type="date"
                            value={date}
                            onChange={(newDate: any) => setDate(newDate)}
                        />
                    </div>
                </div>
                <div className="bg-nfcPurple flex flex-col gap-3 p-3 md:flex-row md:justify-end">
                    <Button variant="add" type="submit">
                        Update
                    </Button>
                    <Button variant="delete" onClick={deleteEventHandler}>
                        Delete
                    </Button>
                    <Button variant="cancel" onClick={() => setOpenModify(false)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default FormModify
