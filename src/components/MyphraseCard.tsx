'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useWordManagement } from '@/hooks/useWordManagement'

const MyphraseCard = ({ word, index, phrases, word_id, phraseIds }) => {
    const { toast } = useToast()
    const { isDeleted, isLoading, error, deletedWordId, deleteWord, restore } =
        useWordManagement({ word_id, phraseIds })
    console.log('isDeleted is', isDeleted)
    return (
        <Card className="my-5">
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle className="text-gray-500 text-lg flex">
                        <p className="text-xl mr-3">{index + 1}</p>
                        {word}
                    </CardTitle>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    disabled={isDeleted}
                                    onClick={() => {
                                        deleteWord()
                                        toast({
                                            title: `${word} has been deleted`,
                                            // description:
                                            //     'If this was a mistake, you can undo the action.',
                                            action: (
                                                <ToastAction
                                                    altText="Undo Delete"
                                                    onClick={() => {
                                                        restore()
                                                    }}>
                                                    Undo Delete
                                                </ToastAction>
                                            ),
                                        })
                                    }}>
                                    <Trash2 />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Delete This Word</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardHeader>
            <CardContent>
                {phrases.map((phrase, idx) => (
                    <div
                        className="flex justify-between space-x-8 mb-3"
                        key={idx}>
                        <div className="md:grid md:w-9/12 ">
                            <div>
                                {' '}
                                {phrase.map((part, partIndex) =>
                                    word.toLowerCase() ===
                                    part.toLowerCase() ? (
                                        <strong key={partIndex}>
                                            &nbsp;{part}&nbsp;
                                        </strong>
                                    ) : (
                                        part
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="md:grid md:w-3/12 "></div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default MyphraseCard
