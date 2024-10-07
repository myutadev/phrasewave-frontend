/* eslint-disable */
'use client'

import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function UserAuthForgotPasswordForm() {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/generate',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()
        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <div className="grid gap-6">
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <div className="mb-6 text-sm text-gray-600">
                        No problem. Just let us know your email address and we
                        will email you a password reset link that will allow you
                        to choose a new one.
                    </div>

                    <Label className="font-bold text-base" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Button className="rounded-xl w-full">
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </div>
    )
}

export {}
