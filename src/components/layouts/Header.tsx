'use client'
import Link from 'next/link'
import React from 'react'
import Dropdown from '../Dropdown'
import { DropdownButton } from '../DropdownLink'
import { useAuth } from '@/hooks/auth'

const Header = () => {
    const { user, logout } = useAuth()

    return (
        <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
            <div className="px-4 py-3 md:py-6 lg:px-6">
                <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
                    <Link
                        href="/generate"
                        className="text-2xl font-bold  mr-4 flex-shrink-0 ">
                        Phrase Wave
                    </Link>

                    <nav className="flex items-center w-full">
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
                </div>
            </div>
        </div>
    )
}

export default Header
