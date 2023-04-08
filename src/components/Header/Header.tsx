import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = ({}) => {
    return (
        <header className="bg-nfcPurpleDark shadow-xl p-2">
            <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
                <Link href={'https://www.nfctron.com/'}>
                    <Image
                        src="/nfctron-logo.svg"
                        alt="NFCtron Logo"
                        className="w-24 lg:w-32 h-auto"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>

                <Link href={'https://github.com/mrtnprzk/nfctron-calendar'}>
                    <Image
                        src="/github-logo.svg"
                        alt="Github Logo"
                        className="w-8 lg:w-10 h-auto"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
