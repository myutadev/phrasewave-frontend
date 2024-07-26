import { Language } from '@/types/type'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectItem,
} from '@/components/ui/select'
import React from 'react'

interface languagesDataProps {
    languagesData: Language[]
}

const LanguageSelector = async ({ languagesData }: languagesDataProps) => {
    return (
        <div className="flex items-baseline mb-5">
            <p className="text-base">Language:</p>
            <Select>
                <SelectTrigger className="w-[210px] border-none text-custompurple text-base">
                    <SelectValue placeholder="Select a Language " />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        {languagesData.map(language => (
                            <SelectItem
                                key={language.language_code}
                                value={language.language_code}>
                                {language.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default LanguageSelector
