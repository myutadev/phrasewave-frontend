import { getCSRFToken } from '@/lib/csrf'
import { useCallback, useState } from 'react'

interface UseDeleteSavedWordProps {
    word_id: number
    phraseIds: number[]
}

interface DeletedWordId {
    word_id: number
}

export const useDeleteSavedWord = ({
    word_id,
    phraseIds,
}: UseDeleteSavedWordProps) => {
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [deletedWordId, setDeletedWordId] = useState<DeletedWordId | null>(
        null,
    )

    const deleteWord = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const csrfToken = await getCSRFToken()
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/myphrases/word`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    credentials: 'include',
                    body: JSON.stringify({ word_id }),
                },
            )

            if (!response.ok) {
                const resObj = await response.json()
                throw new Error(resObj.message)
            }

            const resObj = await response.json()
            setIsDeleted(prev => !prev)
            setDeletedWordId(resObj.data)
        } catch (e: unknown) {
            setError(
                e instanceof Error ? e.message : 'An unknown error Occured',
            )
        } finally {
            setIsLoading(false)
        }
    }, [word_id, getCSRFToken])

    return { isDeleted, isLoading, error, deletedWordId, deleteWord }
}
