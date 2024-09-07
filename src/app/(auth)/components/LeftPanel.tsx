import React from 'react'
import Image from 'next/image'

const LeftPanel = () => {
    return (
        <div className="relative hidden h-full flex-col bg-muted p-10 text-black dark:border-r lg:flex">
            <Image
                src="/images/background.png"
                alt="Authentication background"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                className="z-0"
            />
            <div className="relative z-20 flex flex-col h-full">
                <div className="flex items-center text-lg font-bold mb-8">
                    Phrase Wave
                </div>
                <div className="flex-grow flex flex-col justify-center">
                    <div className="w-3/4 mx-auto">
                        <h1 className="text-4xl font-bold mb-4">
                            Ride the Phrase Wave,
                        </h1>
                        <h1 className="text-4xl font-bold mb-4">
                            Amplify Your Language Mastery
                        </h1>
                        <p className="text-xl pt-2">
                            Elevate your multilingual skills with personalized
                            phrases, making learning fun and practical. Dive
                            into new linguistic worlds through efficient study
                            and natural expression.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
