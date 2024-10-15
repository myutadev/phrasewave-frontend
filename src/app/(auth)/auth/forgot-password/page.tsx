import { Metadata } from 'next'
import LeftPanel from '../../components/LeftPanel'
import { UserAuthForgotPasswordForm } from '../../components/user-auth-forgot-password-form'

export const metadata: Metadata = {
    title: 'Forgot password',
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
                                Forgot Password?
                            </h1>
                        </div>
                        <UserAuthForgotPasswordForm />
                    </div>
                </div>
            </div>
        </>
    )
}
