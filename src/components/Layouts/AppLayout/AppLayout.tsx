import Header from '@/components/Header/Header'
import { FC, ReactNode } from 'react'

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col h-[100vh] w-[100vw]">
            <Header />
            <div className="container mx-auto p-2">{children}</div>
        </main>
    )
}

export default AppLayout
