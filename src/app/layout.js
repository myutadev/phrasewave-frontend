import { Nunito } from 'next/font/google'
import '@/app/global.css'
import Header from '@/components/layouts/Header'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <Header />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'PhraseWave',
    description:
        'PhraseWave is a web application where you can create your own example sentence to learn new words for language learners',
}

export default RootLayout
