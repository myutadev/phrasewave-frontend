import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import LeftPanel from '../../components/LeftPanel'
import { UserAuthRegistgerForm } from '../../components/user-auth-register-form'

export const metadata: Metadata = {
    title: 'Sign up',
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
                                Sign up to Phrase Wave
                            </h1>
                        </div>
                        <UserAuthRegistgerForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            Already have an account?{' '}
                            <Link
                                href="/auth/login"
                                className="underline underline-offset-4 hover:text-primary">
                                Log in
                            </Link>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
