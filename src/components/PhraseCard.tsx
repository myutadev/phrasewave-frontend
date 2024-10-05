import { ApiResponse, User } from '@/types/type'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useSavePhrase } from '@/hooks/useSavePhrase'
import { CircleMinus, CirclePlus } from 'lucide-react'

interface PhraseCardProps {
    phrases: ApiResponse[]
    selectedLanguage: string
    user: User
    index: number
    splitPhrase: string[]
}

const PhraseCard = ({
    phrases,
    selectedLanguage,
    user,
    index,
    splitPhrase,
}: PhraseCardProps) => {
    const { isSaved, toggleSave } = useSavePhrase({
        user,
        selectedLanguage,
        phrases,
        index,
    })

    return (
        <Card className="my-5">
            <CardHeader>
                <CardTitle className="text-gray-500 text-lg flex">
                    <p className="text-xl mr-3">{index + 1}</p>
                    {phrases[index].usedWords.join(', ')}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="md:flex md:justify-between md:space-x-8 md:mb-3">
                    <div className="md:grid md:w-9/12 ">
                        <div>
                            {splitPhrase.map((part, partIndex) =>
                                phrases[index].usedWords.some(word =>
                                    part
                                        .toLowerCase()
                                        .includes(word.toLowerCase()),
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
                    <div className="w-full md:grid md:w-3/12 mt-3">
                        <Button
                            className="w-full md:w-auto"
                            key={`save-button-${index}`}
                            onClick={() => toggleSave()}
                            variant={isSaved ? 'outline' : 'default'}>
                            {isSaved ? (
                                <>
                                    <CircleMinus className="mr-2 h-4 w-4" />
                                    Remove
                                </>
                            ) : (
                                <>
                                    <CirclePlus className="mr-2 h-4 w-4" />
                                    Save
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PhraseCard
