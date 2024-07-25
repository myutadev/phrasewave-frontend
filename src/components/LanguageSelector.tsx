import { Language } from '@/types/type'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import React from 'react'
import LanguageOption from './LanguageOption'

interface languagesDataProps {
    languagesData: Language[]
}

const LanguageSelector = async ({ languagesData }: languagesDataProps) => {
    return (
        <div>
            <p>Language:</p>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Language</SelectLabel>
                        {languagesData.map(language => (
                            <LanguageOption
                                key={language.language_code}
                                language={language}
                            />
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default LanguageSelector
