import type { AppProps } from 'next/app'

import AppLayout from '@/components/Layouts/AppLayout'

import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout>
            <Component {...pageProps} />
            <Toaster />
        </AppLayout>
    )
}
