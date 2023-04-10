import moment from 'moment'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { type Event } from 'react-big-calendar'
import { DateRangeType } from 'react-tailwindcss-datepicker/dist/types'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormAddProps {
    openAdd: boolean
    setOpenAdd: Dispatch<SetStateAction<boolean>>
    selectedEvent: Event | null
    addEventHandler: (title: string, date: DateRangeType) => void
}

const FormAdd: FC<FormAddProps> = ({ openAdd, setOpenAdd, selectedEvent, addEventHandler }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState({
        startDate: '',
        endDate: '',
    })

    useEffect(() => {
        const start = moment(selectedEvent?.start).format('YYYY-MM-DD')

        setTitle('')
        setDate({
            startDate: start,
            endDate: start,
        })
    }, [openAdd])

    return (
        <Modal open={openAdd} setOpen={setOpenAdd}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    addEventHandler(title, date)
                }}
            >
                <div className="bg-nfcPurpleLight p-3 md:p-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-lg font-bold leading-6 text-nfcPurpleDark">Add new Event</h3>
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
                        Add
                    </Button>
                    <Button variant="cancel" onClick={() => setOpenAdd(false)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default FormAdd
