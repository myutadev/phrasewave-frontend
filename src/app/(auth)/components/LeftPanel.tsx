import React from 'react'
import Image from 'next/image'

const LeftPanel = () => {
    return (
        <div className="relative hidden h-full flex-col bg-muted p-10 text-black text-shadow dark:border-r lg:flex">
            <Image
                src="/images/background.png"
                alt="Authentication background"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                className="z-0"
            />
            {/* オーバーレイが必要な場合はコメントアウトを解除し、不透明度を調整してください */}
            {/* <div className="absolute inset-0 bg-black/20 z-10" /> */}
            <div className="relative z-20 flex items-center text-lg font-bold">
                Phrase Wave
            </div>
        </div>
    )
}

export default LeftPanel
