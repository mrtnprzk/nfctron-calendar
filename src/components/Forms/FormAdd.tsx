import moment from 'moment'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { type Event } from 'react-big-calendar'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormAddProps {
    openAdd: boolean
    setOpenAdd: Dispatch<SetStateAction<boolean>>
    selectedEvent: Event | null
    addEventHandler: (title: string, start: string, end: string) => void
}

const FormAdd: FC<FormAddProps> = ({ openAdd, setOpenAdd, selectedEvent, addEventHandler }) => {
    const [title, setTitle] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')

    useEffect(() => {
        const startDate = moment(selectedEvent?.start).format('YYYY-MM-DD')

        setTitle('')
        setStart(startDate)
        setEnd(startDate)
    }, [openAdd])

    return (
        <Modal open={openAdd} setOpen={setOpenAdd}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    addEventHandler(title, start, end)
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
                            placeholder="Start time"
                            name="start-date"
                            type="date"
                            value={start}
                            onChange={(e: any) => setStart(e.target.value)}
                        />
                        <Input
                            placeholder="End time"
                            name="end-date"
                            type="date"
                            value={end}
                            onChange={(e: any) => setEnd(e.target.value)}
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
