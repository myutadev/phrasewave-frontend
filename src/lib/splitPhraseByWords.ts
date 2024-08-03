export const splitPhraseByWords = (
    usedWords: string[],
    generatedPhrase: string,
): string[] => {
    const parts: string[] = generatedPhrase.split(
        new RegExp(`(${usedWords.join('|')})`, 'gi'),
    )

    return parts
}
