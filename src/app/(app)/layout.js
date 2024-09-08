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
        <div className="md:container md:mx-auto max-w-md mx-auto px-4 py-8 md:max-w-none md:px-0 md:py-0">
            <Header />
            {children}
        </div>
    )
}

export default AppLayout
