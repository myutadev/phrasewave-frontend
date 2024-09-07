import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const MyphraseCard = ({ word, index, phrases }) => {
    // console.log(phrases)
    // console.log(typeof phrases)
    return (
        <Card className="my-5">
            <CardHeader>
                <CardTitle className="text-gray-500 text-lg flex">
                    <p className="text-xl mr-3">{index + 1}</p>
                    {word}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {phrases.map((phrase, idx) => (
                    <div
                        className="flex justify-between space-x-8 mb-3"
                        key={idx}>
                        <div className="grid w-9/12 ">
                            <div>
                                {' '}
                                {phrase.map((part, partIndex) =>
                                    word.toLowerCase() ===
                                    part.toLowerCase() ? (
                                        <strong key={partIndex}>
                                            &nbsp;{part}&nbsp;
                                        </strong>
                                    ) : (
                                        part
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="grid w-3/12 "></div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default MyphraseCard
