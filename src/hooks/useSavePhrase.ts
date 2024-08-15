import { getCSRFToken } from '@/lib/csrf'
import { ApiResponse, User } from '@/types/type'
import { useCallback, useState } from 'react'

interface UseSavePhraseProps {
    user: User
    selectedLanguage: string
    phrases: ApiResponse[]
    index: number
}

export function useSavePhrase({
    user,
    selectedLanguage,
    phrases,
    index,
    // savedData,
}: UseSavePhraseProps) {
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [savedData, setSavedData] = useState<ApiResponse | null>(null)

    const toggleSave = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        if (isSaved) {
            setIsSaved(false)
            setSavedData(null)
            return
        }

        const requestData = {
            user_id: user['id'],
            language: selectedLanguage,
            words: phrases[index].usedWords,
            phrase: phrases[index].generatedPhrase,
        }

        try {
            const csrfToken = await getCSRFToken()
            const response = await fetch(
                'http://localhost:8000/api/myphrases',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    credentials: 'include',
                    body: JSON.stringify(requestData),
                },
            )

            if (response.ok) {
                setIsSaved(prev => !prev)
                setSavedData(phrases[index])
            } else {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Failed to save phrase')
            }
        } catch (e) {
            setError(
                e instanceof Error ? e.message : 'An unknown error occurred',
            )
        } finally {
            setIsLoading(false)
        }
    }, [user, selectedLanguage, phrases, isSaved, index])

    return { isSaved, isLoading, error, toggleSave }
}
