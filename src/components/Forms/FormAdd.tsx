import { Dispatch, FC, SetStateAction } from 'react'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'

interface FormAddProps {
    openAdd: boolean
    setOpenAdd: Dispatch<SetStateAction<boolean>>
}

const FormAdd: FC<FormAddProps> = ({ openAdd, setOpenAdd }) => {
    return (
        <Modal open={openAdd} setOpen={setOpenAdd}>
            <form>
                <div className="bg-nfcPurpleLight p-3 md:p-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-lg font-bold leading-6 text-nfcPurpleDark">Add new Event</h3>
                        <Input placeholder="Title" name="title" />
                        <Input placeholder="Title" name="start-date" />
                        <Input placeholder="Title" name="end-date" />
                    </div>
                </div>
                <div className="bg-nfcPurple flex flex-col gap-3 p-3 md:flex-row md:justify-end">
                    <Button variant="add" type="submit">
                        Add
                    </Button>
                    <Button variant="cancel">Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

export default FormAdd
