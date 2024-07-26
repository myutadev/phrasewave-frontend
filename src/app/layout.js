import { Nunito, Poppins } from 'next/font/google'
import '@/app/global.css'
import Header from '@/components/layouts/Header'

const poppingsFont = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={poppingsFont.className}>
            <body className="antialiased">
                <div className='container mx-auto'>
                    <Header />
                    {children}
                </div>
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
