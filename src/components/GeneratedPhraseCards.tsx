'use client'
import { ApiResponse, User } from '@/types/type'
import React from 'react'
import { splitPhraseByWords } from '@/lib/splitPhraseByWords'
import { Button } from '@/components/ui/button'
import PhraseCard from './PhraseCard'

interface PhrasesProps {
    phrases: ApiResponse[]
    resetForm: () => void
    selectedLanguage: string
    user: User
}

const GeneratedPhraseCards = ({
    phrases,
    resetForm,
    selectedLanguage,
    user,
}: PhrasesProps) => {
    const splitPhrases = phrases.map(phraseObj => {
        const { usedWords, generatedPhrase } = phraseObj
        return splitPhraseByWords(usedWords, generatedPhrase)
    })

    return (
        <div className="mt-10">
            <div className="my-10 font-semibold text-xl">
                We got 3 magical phrases for you!
            </div>
            <div>
                {splitPhrases.map((splitPhrase, index) => (
                    <PhraseCard
                        splitPhrase={splitPhrase}
                        phrases={phrases}
                        selectedLanguage={selectedLanguage}
                        user={user}
                        index={index}
                        key={index}
                    />
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
