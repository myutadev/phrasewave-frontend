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

export interface MyphraseResponseData {
    [key: string]: {
        phrases: string[]
        language: string
    }
}

export interface MyphraseResponse {
    data: MyphraseResponseData[]
}

export type ErrorMessages =
    | []
    | {
          email?: string[] | string
          password?: string[] | string
          [key: string]: string[] | string
      }
