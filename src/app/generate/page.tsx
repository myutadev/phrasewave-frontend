import LanguageSelector from '@/components/LanguageSelector'
import { Language } from '@/types/type'
import React from 'react'

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
        <div className="mx-3 my-3">
            <div>Generate</div>
            <LanguageSelector languagesData={languagesData} />
        </div>
    )
}

export default Generate
