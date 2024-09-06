import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'PhraseWave',
}

const Layout = ({ children }) => {
    return <div>{children}</div>
}

export default Layout
