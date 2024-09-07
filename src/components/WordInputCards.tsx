'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Form, FormField, FormItem, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formSchema } from '@/schemas/wordContextFormSchema'

interface input {
    id: number
    wordId: string
    contextId: string
}

const WordInputCards = () => {
    const inputs: input[] = [
        { id: 1, wordId: 'word1', contextId: 'context1' },
        { id: 2, wordId: 'word2', contextId: 'context2' },
        { id: 3, wordId: 'word3', contextId: 'context3' },
        { id: 4, wordId: 'word4', contextId: 'context4' },
        { id: 5, wordId: 'word5', contextId: 'context5' },
    ]

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
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

    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        const { word1, context1 } = value
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {inputs.map((item, index) => (
                        <Card className="mt-10" key={item.id}>
                            <CardHeader>
                                <CardTitle className="text-`gray-500">
                                    {index + 1}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between space-x-8 mb-3">
                                    <div className="grid w-4/12 items-center ">
                                        <div className="flex flex-col space-y-1.5 ">
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                // @ts-expect-error: wordId is dynamically generated and doesn't match static types
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
                                                // @ts-expect-error: contextId is dynamically generated and doesn't match static types
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
                    <Button
                        type="submit"
                        className="mt-10 container w-64 flex justify-center">
                        Generate Your Phrases
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default WordInputCards
