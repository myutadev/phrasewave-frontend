import { z } from 'zod'

const languageSchema = z
    .string()
    .min(1, { message: 'please select a language' })
const firstWordSchema = z
    .string()
    .min(2, { message: 'Word/expression should be at least 2 letters long' })
const wordSchema = z.union([
    z.string().min(2, {
        message: 'Word/expression should be at least 2 letters long',
    }),
    z.string().optional(),
])
const contextSchema = z.union([
    z.string().min(3, { message: 'Context should be at least 3 letters long' }),
    z.string().optional(),
])

export const formSchema = z.object({
    language: languageSchema,
    word1: firstWordSchema,
    word2: wordSchema,
    word3: wordSchema,
    word4: wordSchema,
    word5: wordSchema,
    context1: contextSchema,
    context2: contextSchema,
    context3: contextSchema,
    context4: contextSchema,
    context5: contextSchema,
})
