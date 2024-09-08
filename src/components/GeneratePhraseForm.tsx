'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Form, FormField, FormItem, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formSchema } from '@/schemas/wordContextFormSchema'
import { ApiResponse, Language } from '@/types/type'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from '@/components/ui/select'
import { getCSRFToken } from '@/lib/csrf'
import { RiseLoader } from 'react-spinners'
import GeneratedPhraseCards from './GeneratedPhraseCards'
import { useAuth } from '@/hooks/auth'

interface GeneratePhraseFormProps {
    languagesData: Language[]
}

type wordKeys = 'word1' | 'word2' | 'word3' | 'word4' | 'word5'
type contextKeys =
    | 'context1'
    | 'context2'
    | 'context3'
    | 'context4'
    | 'context5'

interface input {
    id: number
    wordId: wordKeys
    contextId: contextKeys
}

interface AuthOptions {
    middleware: string
    redirectIfAuthenticated?: string
}

const GeneratePhraseForm = ({ languagesData }: GeneratePhraseFormProps) => {
    const inputs: input[] = [
        { id: 1, wordId: 'word1', contextId: 'context1' },
        { id: 2, wordId: 'word2', contextId: 'context2' },
        { id: 3, wordId: 'word3', contextId: 'context3' },
        { id: 4, wordId: 'word4', contextId: 'context4' },
        { id: 5, wordId: 'word5', contextId: 'context5' },
    ]

    const { reset, ...form } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            language: '',
            word1: '',
            context1: '',
            word2: '',
            context2: '',
            word3: '',
            context3: '',
            word4: '',
            context4: '',
            word5: '',
            context5: '',
        },
    })

    const resetForm = () => {
        reset()
        setResponse(null)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user } = useAuth({ middleware: 'auth' } as any)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [response, setResponse] = useState<ApiResponse[] | null>(null)
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
        null,
    )

    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true)
            setError(null)
            setResponse(null)
            const csrfToken = await getCSRFToken()
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    credentials: 'include',
                    body: JSON.stringify(value),
                },
            )

            if (!res.ok) throw new Error('Network response was not ok')

            const jsonres: ApiResponse[] = await res.json()

            setResponse(jsonres)
        } catch (error) {
            setError(error.message || 'An error occured')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Form {...form} reset={reset}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        <div className="flex items-baseline">
                            <p className="text-base">Language:</p>
                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            onValueChange={value => {
                                                setSelectedLanguage(value)
                                                field.onChange(value)
                                            }}
                                            value={field.value}>
                                            <SelectTrigger className="w-[210px] border-none text-custompurple text-base">
                                                <SelectValue placeholder="CHOOSE LANGUAGE " />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Language
                                                    </SelectLabel>
                                                    {languagesData.map(
                                                        language => (
                                                            <SelectItem
                                                                key={
                                                                    language.language_code
                                                                }
                                                                value={
                                                                    language.name
                                                                }>
                                                                {language.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    {inputs.map((item, index) => (
                        <Card className="mt-3" key={item.id}>
                            <CardHeader>
                                <CardTitle className="text-gray-500">
                                    {index + 1}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="md:flex md:justify-between md:space-x-8 space-y-4 md:space-y-0">
                                    <div className="w-full md:w-4/12 items-center">
                                        <div className="flex flex-col space-y-1 ">
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name={item.wordId}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Input
                                                            id={item.wordId}
                                                            placeholder="Enter New Word/Expression"
                                                            className="border-b-2 border-gray-400"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid w-8/12 items-center ">
                                        <div className="flex flex-col space-y-1.5">
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name={item.contextId}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Input
                                                            id={item.contextId}
                                                            placeholder="Enter Context(optional)"
                                                            className="border-b-2 border-gray-400"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {!isLoading && !response && (
                        <Button
                            type="submit"
                            className="mt-10 container w-64 flex justify-center">
                            Generate Your Phrases
                        </Button>
                    )}
                </form>
            </Form>
            {isLoading && (
                <div className="my-10 flex justify-center">
                    <RiseLoader size={10} color="#6B7280" />
                </div>
            )}
            {error && <p>Error:{error}</p>}
            {response && (
                <div>
                    <GeneratedPhraseCards
                        phrases={response}
                        resetForm={resetForm}
                        selectedLanguage={selectedLanguage}
                        user={user}
                    />
                </div>
            )}
        </div>
    )
}

export default GeneratePhraseForm
