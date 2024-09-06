// import { getCSRFToken } from '@/lib/csrf'
import { useEffect, useState } from 'react'
// import { cookies } from 'next/headers'

export const useSavedWords = () => {
    const [savedWords, setSavedWords] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSavedWords = async () => {
            try {
                setIsLoading(true)
                // const cookieStore = cookies()
                // const csrfToken = await getCSRFToken()
                const response = await fetch(
                    'http://localhost:8000/api/myphrases',
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            // 'X-CSRF-TOKEN': csrfToken,
                        },
                        credentials: 'include',
                    },
                )
                if (response.ok) {
                    const data = response.json()
                    setSavedWords(data)
                }
            } catch (e) {
                setError(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchSavedWords()
    }, [])
    return { savedWords, isLoading, error }
}
