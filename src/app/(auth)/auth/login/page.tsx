import { Metadata } from 'next'
import Link from 'next/link'

import { UserAuthLoginForm } from '../../components/user-auth-login-form'
import LeftPanel from '../../components/LeftPanel'

export const metadata: Metadata = {
    title: 'Login',
    description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
    return (
        <>
            <div className="container relative h-screen flex flex-col items-center justify-center px-4 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <LeftPanel />
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Login to Phrase Wave
                            </h1>
                        </div>
                        <UserAuthLoginForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            Dont' have an account?{' '}
                            <Link
                                href="/auth/register"
                                className="underline underline-offset-4 hover:text-primary">
                                Sign up
                            </Link>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
