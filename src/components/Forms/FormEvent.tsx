import moment from 'moment'
import { useEffect, useState, type ChangeEvent, type Dispatch, type FC, type SetStateAction } from 'react'
import { type Event } from 'react-big-calendar'
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types'

import Button from '@/components/Button/Button'
import { FORM_TYPE } from '@/components/Forms/constants'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormEventProps {
    formType: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    selectedEvent: Event | null
    addEventHandler: (title: string, date: DateValueType) => void
    modifyEventHandler: (title: string, date: DateValueType) => void
    deleteEventHandler: () => void
}

const FormEvent: FC<FormEventProps> = ({
    formType,
    isOpen,
    setIsOpen,
    selectedEvent,
    addEventHandler,
    modifyEventHandler,
    deleteEventHandler,
}) => {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<DateValueType>({
        startDate: '',
        endDate: '',
    })

    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formType === FORM_TYPE.ADD) addEventHandler(title, date)

        if (formType === FORM_TYPE.MODIFY) modifyEventHandler(title, date)
    }

    useEffect(() => {
        const eventTitle = selectedEvent?.title as string
        const startDate = moment(selectedEvent?.start).format('YYYY-MM-DD')
        const endDate = moment(selectedEvent?.end).format('YYYY-MM-DD')

        if (formType === FORM_TYPE.ADD) {
            setTitle('')
            setDate({
                startDate: startDate,
                endDate: startDate,
            })
        }

        if (formType === FORM_TYPE.MODIFY) {
            setTitle(eventTitle)
            setDate({
                startDate,
                endDate,
            })
        }
    }, [isOpen])

    return (
        <Modal open={isOpen} setOpen={setIsOpen}>
            <form onSubmit={submitHandler}>
                <div className="bg-nfcPurpleLight p-3 md:p-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-lg font-bold leading-6 text-nfcPurpleDark">Modify Event</h3>
                        <Input
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Pick Date"
                            name="date"
                            type="date"
                            value={date}
                            onChange={(value: DateValueType) => setDate(value)}
                        />
                    </div>
                </div>
                <div className="bg-nfcPurple flex flex-col gap-3 p-3 md:flex-row md:justify-end">
                    <Button variant="add" type="submit">
                        {formType === FORM_TYPE.MODIFY ? 'Update' : 'Add'}
                    </Button>
                    {formType === FORM_TYPE.MODIFY && (
                        <Button variant="delete" onClick={deleteEventHandler}>
                            Delete
                        </Button>
                    )}
                    <Button variant="cancel" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default FormEvent
