import { type ChangeEvent, type FC, type HTMLInputTypeAttribute } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

import { cx } from '@/lib/classnames'
import { yesterday } from '@/lib/dates'
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types'

interface InputProps {
    name: string
    placeholder: string
    type?: HTMLInputTypeAttribute
    value: string | DateValueType
    onChange:
        | ((e: ChangeEvent<HTMLInputElement>) => void)
        | ((value: DateValueType, e?: HTMLInputElement | null | undefined) => void)
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
                    value={value as DateValueType}
                    onChange={onChange as (value: DateValueType, e?: HTMLInputElement | null | undefined) => void}
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
                    value={value as string}
                    onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
                />
            )}
        </>
    )
}

export default Input
