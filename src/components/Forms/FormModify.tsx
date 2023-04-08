import { Dispatch, FC, SetStateAction, useState } from 'react'
import { type Event } from 'react-big-calendar'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormModifyProps {
    openModify: boolean
    setOpenModify: Dispatch<SetStateAction<boolean>>
    selectedEvent: Event | null
}

const FormModify: FC<FormModifyProps> = ({ openModify, setOpenModify, selectedEvent }) => {
    const [title, setTitle] = useState('')
    const [start, setStart] = useState(selectedEvent?.start ?? '')
    const [end, setEnd] = useState(selectedEvent?.end ?? '')

    return (
        <Modal open={openModify} setOpen={setOpenModify}>
            <form>
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
                        Update
                    </Button>
                    <Button variant="delete" type="submit">
                        Delete
                    </Button>
                    <Button variant="cancel">Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

export default FormModify
