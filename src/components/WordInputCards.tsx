import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface input {
    id: number
    wordId: string
    phraseId: string
}

const WordInputCards = () => {
    const inputs: input[] = [
        { id: 1, wordId: 'word1', phraseId: 'phrase1' },
        { id: 2, wordId: 'word2', phraseId: 'phrase2' },
        { id: 3, wordId: 'word3', phraseId: 'phrase3' },
        { id: 4, wordId: 'word4', phraseId: 'phrase4' },
        { id: 5, wordId: 'word5', phraseId: 'phrase5' },
    ]
    return (
        <div>
            <form>
                {inputs.map((item, index) => (
                    <Card className="mt-10" key={item.id}>
                        <CardHeader>
                            <CardTitle className="text-gray-500">
                                {index + 1}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between space-x-8 mb-3">
                                <div className="grid w-4/12 items-center ">
                                    <div className="flex flex-col space-y-1.5 ">
                                        <Input
                                            id={item.wordId}
                                            placeholder="Enter New Word/Expression"
                                            className="border-b-2 border-gray-400"
                                        />
                                    </div>
                                </div>
                                <div className="grid w-8/12 items-center ">
                                    <div className="flex flex-col space-y-1.5">
                                        <Input
                                            id={item.phraseId}
                                            placeholder="Enter Phrase(optional)"
                                            className="border-b-2 border-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </form>
        </div>
    )
}

export default WordInputCards
