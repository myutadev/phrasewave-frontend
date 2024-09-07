export const getCSRFToken = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/csrf-token`,
        { credentials: 'include' },
    )

    const data = await response.json()
    return data.token
}
