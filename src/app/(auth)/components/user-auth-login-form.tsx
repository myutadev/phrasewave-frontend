'use client'

import * as React from 'react'

import InputError from '@/components/InputError'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ErrorMessages } from '@/types/type'
import Link from 'next/link'

export function UserAuthLoginForm() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/generate',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState<ErrorMessages>([])
    const [status, setStatus] = useState(null)

    // useEffect(() => {
    //     if (router.reset?.length > 0 && errors.length === 0) {
    //         setStatus(atob(router.reset))
    //     } else {
    //         setStatus(null)
    //     }
    // })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

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
                    />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <div className="flex justify-between">
                        <Label
                            className="font-bold text-base"
                            htmlFor="password">
                            Password
                        </Label>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full border-2 rounded-xl"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <InputError
                        messages={(errors as { password?: string[] }).password}
                        className="mt-2"
                    />
                </div>

                {/* Remember Me */}
                <div className="mt-4 flex justify-between">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                    <Link
                        href="/auth/forgot-password"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot?
                    </Link>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="w-full rounded-xl">Login</Button>
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
