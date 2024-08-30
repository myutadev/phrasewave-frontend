'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import Header from '@/components/layouts/Header'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="container mx-auto">
            <Header />
            {children}
        </div>
    )
}

export default AppLayout
