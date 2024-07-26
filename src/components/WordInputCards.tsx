'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Form, FormField } from './ui/form'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'

interface input {
    id: number
    wordId: string
    contextId: string
}

const onSubmit = async value => {
    console.log(value)
    const { word1, phrase1 } = value
    console.log(word1, phrase1)
}

const WordInputCards = () => {
    const inputs: input[] = [
        { id: 1, wordId: 'word1', contextId: 'phrase1' },
        { id: 2, wordId: 'word2', contextId: 'phrase2' },
        { id: 3, wordId: 'word3', contextId: 'phrase3' },
        { id: 4, wordId: 'word4', contextId: 'phrase4' },
        { id: 5, wordId: 'word5', contextId: 'phrase5' },
    ]

    const form = useForm()

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
                                                name={item.wordId}
                                                render={({ field }) => (
                                                    <Input
                                                        id={item.wordId}
                                                        placeholder="Enter New Word/Expression"
                                                        className="border-b-2 border-gray-400"
                                                        {...field}
                                                    />
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
                                                    <Input
                                                        id={item.contextId}
                                                        placeholder="Enter Context(optional)"
                                                        className="border-b-2 border-gray-400"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <Button type="submit" className="mt-10 container w-64 flex justify-center">
                        Generate Your Phrases
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default WordInputCards
