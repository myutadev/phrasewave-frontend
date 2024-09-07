import { MyphraseResponseData } from '@/types/type'
import React, { useState } from 'react'
import MyphraseCard from './MyphraseCard'
import { splitPhraseByWords } from '@/lib/splitPhraseByWords'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { FormField, FormItem } from './ui/form'

interface MyphraseCardsProps {
    wordPhrases: MyphraseResponseData[]
}

const MyphraseCards = ({ wordPhrases }: MyphraseCardsProps) => {
    const allSavedLanguagesArray = []
    wordPhrases.forEach(wordObj => {
        const key = Object.keys(wordObj)[0]
        const curLanguage = wordObj[key]['language']

        if (allSavedLanguagesArray.some(item => item === curLanguage)) return
        allSavedLanguagesArray.push(curLanguage)
    })

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
        allSavedLanguagesArray[0],
    )
    const { ...form } = useForm({
        defaultValues: {
            language: allSavedLanguagesArray[0],
        },
    })

    const filteredByLanguage = wordPhrases.filter(wordObj => {
        const key = Object.keys(wordObj)[0]
        return selectedLanguage === wordObj[key]['language']
    })

    const processedWordPhrases = filteredByLanguage.map(wordObj => {
        const key = Object.keys(wordObj)[0]

        const newVals = wordObj[key]['phrases'].map(value => {
            return splitPhraseByWords([key], value)
        })
        const newObj = { [key]: newVals }
        return newObj
    })

    return (
        <div>
            <div>
                <div className="flex items-baseline mb-5">
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
                                            {allSavedLanguagesArray.map(
                                                (language, index) => (
                                                    <SelectItem
                                                        key={index}
                                                        value={language}>
                                                        {language}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    {processedWordPhrases.map((wordObj, index) => (
                        <MyphraseCard
                            phrases={Object.values(wordObj)[0]}
                            index={index}
                            word={Object.keys(wordObj)[0]}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyphraseCards
