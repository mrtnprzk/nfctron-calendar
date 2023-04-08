import { FC, HTMLInputTypeAttribute } from 'react'

interface InputProps {
    name: string
    placeholder: string
    type?: HTMLInputTypeAttribute
}

const Input: FC<InputProps> = ({ name, placeholder, type = 'text' }) => {
    return (
        <>
            <label htmlFor={name} className="sr-only">
                {placeholder}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required
                className="w-full outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-nfcPurple duration-500"
                placeholder={placeholder}
            />
        </>
    )
}

export default Input
