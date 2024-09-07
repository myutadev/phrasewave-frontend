'use client'

import * as React from 'react'

import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ErrorMessages } from '@/types/type'

export function UserAuthRegistgerForm() {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/generate',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<ErrorMessages>([])
    const [status, setStatus] = useState<string | null>(null) // status の定義

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <div className="grid gap-6">
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
                {/* Name */}
                <div>
                    <Label className="font-bold text-base" htmlFor="name">
                        Name
                    </Label>

                    <Input
                        id="name"
                        type="text"
                        value={name}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event => setName(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError
                        messages={(errors as { name?: string[] }).name}
                        className="mt-2"
                    />
                </div>

                {/* Email Address */}
                <div className="mt-4">
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
                    />

                    <InputError
                        messages={(errors as { email?: string[] }).email}
                        className="mt-2"
                    />
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
                        autoComplete="new-password"
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
                    <Button className="mt-5 w-full rounded-xl">Register</Button>
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    {/* <span className="w-full border-t" /> */}
                </div>
                {/* <div className="relative flex justify-center text-xs uppercase"> */}
                {/* <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span> */}
                {/* </div> */}
            </div>
            {/* <Button variant="outline" type="button">
                GitHub
            </Button> */}
        </div>
    )
}
