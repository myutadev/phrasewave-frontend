import LanguageSelector from '@/components/LanguageSelector'
import { Language } from '@/types/type'
import React from 'react'
import WordInputCards from '@/components/WordInputCards'
import GeneratePhraseForm from '@/components/GeneratePhraseForm'

const getAllLanguageData = async () => {
    const res = await fetch('http://localhost:8000/api/languages', {
        cache: 'default',
    })

    const languagesData = await res.json()
    return languagesData
}

const Generate = async () => {
    const languagesData: Language[] = await getAllLanguageData()
    console.log(languagesData)

    return (
        <div className="mx-5 my-5">
            <div className="font-semibold text-xl">Ask AI for the phrase!</div>
            <div className="pt-5">
                <GeneratePhraseForm languagesData={languagesData} />
            </div>
        </div>
    )
}

export default Generate
