'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import { DropdownButton } from '../DropdownLink'
import { useAuth } from '@/hooks/auth'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const { user, logout } = useAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // メニューが開いているときに背景スクロールを無効化
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const menuItems = [
        { href: '/generate', label: 'Generate' },
        { href: '/myphrases', label: 'My Phrases' },
        // { href: '/settings', label: 'Settings' },
    ]

    return (
        <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
            <div className="px-4 py-3 md:py-6 lg:px-6">
                <div className="flex items-center space-y-2 justify-between md:space-y-0 md:space-x-6">
                    <Link
                        href="/generate"
                        className="text-2xl font-bold  mr-4 flex-shrink-0 ">
                        Phrase Wave
                    </Link>

                    {/* ハンバーガーメニューボタン（モバイルのみ） */}
                    <button
                        className="md:hidden z-10"
                        onClick={toggleMenu}
                        aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* デスクトップナビゲーション */}
                    <nav className="hidden md:flex items-center w-full">
                        <div className="flex space-x-6  text-sm">
                            <Link
                                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="/generate">
                                Generate
                            </Link>
                            <Link
                                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="/myphrases">
                                My Phrases
                            </Link>
                            {/* <Link
                                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="/settings">
                                Settings
                            </Link> */}
                        </div>
                        <div className="ml-auto">
                            {/* Settings Dropdown */}
                            {user ? (
                                <Dropdown
                                    align="right"
                                    width="48"
                                    trigger={
                                        <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                            <div>{user?.name}</div>

                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                    {/* Authentication */}
                                    <DropdownButton onClick={logout}>
                                        Logout
                                    </DropdownButton>
                                </Dropdown>
                            ) : null}
                        </div>
                    </nav>

                    {/* モバイルメニュー */}
                    <div
                        className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden transition-transform duration-300 ease-in-out ${
                            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        <div className="flex flex-col h-full justify-center items-center space-y-8 relative">
                            {/* 閉じるボタン */}
                            <button
                                className="absolute top-4 right-4 text-gray-900 dark:text-gray-100"
                                onClick={toggleMenu}
                                aria-label="Close menu">
                                <X size={24} />
                            </button>
                            {menuItems.map(item => (
                                <Link
                                    key={item.href}
                                    className="text-2xl font-medium text-gray-900 dark:text-gray-100"
                                    href={item.href}
                                    onClick={toggleMenu}>
                                    {item.label}
                                </Link>
                            ))}
                            {user && (
                                <button
                                    onClick={() => {
                                        logout()
                                        toggleMenu()
                                    }}
                                    className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
