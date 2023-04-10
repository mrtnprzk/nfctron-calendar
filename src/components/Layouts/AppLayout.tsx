import { FC, ReactNode } from 'react'

import Header from '@/components/Header/Header'

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className="bg-nfcPurpleLight flex flex-col h-screen w-screen">
            <Header />
            <div className="container max-w-screen-2xl mx-auto mb-auto md:m-auto p-2">{children}</div>
        </main>
    )
}

export default AppLayout
