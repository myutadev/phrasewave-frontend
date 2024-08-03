'use client'
import { ApiResponse } from '@/types/type'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { splitPhraseByWords } from '@/lib/splitPhraseByWords'
import { Button } from '@/components/ui/button'

interface PhrasesProps {
    phrases: ApiResponse[]
    resetForm: () => void
}

const GeneratedPhraseCards = ({
    phrases,
    resetForm,
}: PhrasesProps) => {
    const splitPhrases = phrases.map(phraseObj => {
        const { usedWords, generatedPhrase } = phraseObj
        return splitPhraseByWords(usedWords, generatedPhrase)
    })
    console.log('splitPhrases', splitPhrases)

    return (
        <div className="mt-10">
            <div className="my-10 font-semibold text-xl">
                We got 3 magical phrases for you!
            </div>
            <div>
                {splitPhrases.map((splitPhrase, index) => (
                    <Card className="my-5">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-lg flex">
                                <p className="text-xl mr-3">{index + 1}</p>
                                {phrases[index].usedWords.join(', ')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between space-x-8 mb-3">
                                <div className="grid w-9/12 items-center ">
                                    <div className="flex">
                                        {splitPhrase.map((part, partIndex) =>
                                            phrases[index].usedWords.some(
                                                word =>
                                                    part
                                                        .toLowerCase()
                                                        .includes(
                                                            word.toLowerCase(),
                                                        ),
                                            ) ? (
                                                <strong key={partIndex}>
                                                    &nbsp;{part}&nbsp;
                                                </strong>
                                            ) : (
                                                part
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                <div className="flex justify-end">
                    <Button
                        onClick={() => {
                            resetForm()
                        }}
                        variant="link">
                        Start over with new words
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default GeneratedPhraseCards
