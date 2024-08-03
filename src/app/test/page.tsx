import { getCSRFToken } from '@/lib/csrf'
import { generatePhraseService } from '@/services/generatePhraseService'
import React from 'react'

const formData = {
    language: 'English (US)',
    word1: 'obfuscate',
    word2: 'intransigent',
    word3: 'sycophant',
    word4: 'esoteric',
    word5: '',
    context1: '',
    context2: '',
    context3: 'He is nothing but a sycophant to the boss.',
    context4: 'The book was full of esoteric references.',
    context5: '',
}

const page = () => {
    getCSRFToken()
    return <div>page</div>
}

export default page
