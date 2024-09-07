import { Metadata } from 'next'
import Image from 'next/image'

import LeftPanel from '../../components/LeftPanel'
// import { UserAuthForgotPasswordForm } from '../../components/user-auth-forgot-password-form'

export const metadata: Metadata = {
    title: 'Forgot password',
    description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/authentication-light.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <LeftPanel />
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Forgot Password?
                            </h1>
                        </div>
                        {/* <UserAuthForgotPasswordForm /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
