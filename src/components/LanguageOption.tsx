import React from 'react'
import { Language } from '@/types/type'
import { SelectItem } from '@radix-ui/react-select'

interface languageOptionProps {
    language: Language
}

const LanguageOption = ({ language }: languageOptionProps) => {
    const { language_code, name } = language
    return (
        <div>
            <SelectItem value={language_code}>{name}</SelectItem>
        </div>
    )
}

export default LanguageOption
