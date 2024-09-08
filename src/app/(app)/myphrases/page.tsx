'use client'

import MyphraseCards from '@/components/MyphraseCards'
import { MyphraseResponse } from '@/types/type'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [wordPhrases, setWordPhrases] = useState<MyphraseResponse>(null)
    const [error, setError] = useState<string>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/myphrases`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    },
                )

                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }

                const data = await response.json()
                setWordPhrases(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!wordPhrases) return <div>No data available</div>

    return (
        <div className="mx-5 my-5">
            <div className="font-semibold text-xl">My Phrases</div>
            <div className="pt-5">
                <MyphraseCards wordPhrases={wordPhrases.data} />
            </div>
        </div>
    )
}

export default page
