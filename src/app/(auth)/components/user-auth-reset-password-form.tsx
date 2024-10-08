/* eslint-disable */
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputError from '@/components/InputError'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

export function UserAuthResetPasswordForm() {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/generate',
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(searchParams.get('email'))
    }, [searchParams.get('email')])

    return (
        <div className="grid gap-6">
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label className="font-bold text-base" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                    <InputError
                        messages={(errors as { email?: string[] }).email}
                        className="mt-2"
                    />{' '}
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label className="font-bold text-base" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />

                    <InputError
                        messages={(errors as { password?: string[] }).password}
                        className="mt-2"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label
                        className="font-bold text-base"
                        htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>

                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                    />

                    <InputError
                        messages={
                            (errors as { password_confirmation?: string[] })
                                .password_confirmation
                        }
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button>Reset Password</Button>
                </div>
            </form>
        </div>
    )
}

export {}
