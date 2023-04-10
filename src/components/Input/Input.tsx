import { cx } from '@/lib/classnames'
import { yesterday } from '@/lib/dates'
import { FC, HTMLInputTypeAttribute } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

interface InputProps {
    name: string
    placeholder: string
    type?: HTMLInputTypeAttribute
    value: any
    onChange: any
}

const Input: FC<InputProps> = ({ name, placeholder, type = 'text', value, onChange }) => {
    const inputClassName =
        'w-full outline-none rounded-md border-0 py-2 px-4 font-semibold text-nfcPurpleDark text-base ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500/20 duration-500'

    return (
        <>
            <label htmlFor={name} className="sr-only">
                {placeholder}
            </label>
            {type === 'date' ? (
                <Datepicker
                    inputId={name}
                    inputName={name}
                    value={value}
                    onChange={onChange}
                    useRange={false}
                    placeholder={placeholder}
                    displayFormat={'DD/MM/YYYY'}
                    readOnly={true}
                    primaryColor={'purple'}
                    inputClassName={inputClassName}
                    minDate={yesterday}
                    startWeekOn="mon"
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    required
                    className={cx(inputClassName)}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    )
}

export default Input
