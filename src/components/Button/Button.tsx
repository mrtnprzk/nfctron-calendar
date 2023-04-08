import { cx } from '@/lib/classnames'
import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'

const buttonVariants = cva(
    'inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus:outline-none hover:scale-90 sm:w-auto duration-300',
    {
        variants: {
            variant: {
                cancel: 'bg-nfcPurpleLight text-nfcPurple',
                add: 'bg-nfcGreen text-nfcPurpleDark',
                delete: 'bg-red-500 text-nfcPurpleLight',
            },
        },
        defaultVariants: {
            variant: 'cancel',
        },
    },
)

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    variant: 'cancel' | 'add' | 'delete'
    type?: 'button' | 'submit'
}

const Button: FC<ButtonProps> = ({ children, className, onClick, variant, type = 'button', ...props }) => {
    return (
        <button type={type} {...props} className={cx(buttonVariants({ variant, className }))} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
