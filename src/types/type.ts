export interface Language {
    language_code: string
    name: string
}

export interface ApiResponse {
    usedWords: string[]
    generatedPhrase: string
}

export interface User {
    id: number
    name: string
    email: string
}
