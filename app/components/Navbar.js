'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <nav className="bg-gray-300 text-white px-6 md:h-16 flex justify-between items-center flex-col md:flex-row shadow-lg">
      {/* Logo Section */}
      <Link href={'/'} className="flex items-center gap-0">
        <img src="icons/logo.gif" width={90} alt="Talent Tree Logo" className="drop-shadow-md" />
        <span className="text-2xl md:text-3xl tracking-wide text-black font-bold">
          Talent Tree
        </span>
      </Link>

      {/* User Options Section */}
      <div className="relative mt-4 md:mt-0">
        {session ? (
          <>
            <button
              id="dropdownDefaultButton"
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
              className="flex items-center gap-2text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 mb-2 md:mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Welcome, {session.user.username}
              <svg
                className="w-4 h-4 transform transition-transform"
                style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0)' }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`absolute right-0 bg-white text-gray-700 rounded-md shadow-lg mt-2 w-48 overflow-hidden z-50 transition-all duration-300 ${showDropdown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <ul className="py-2 text-sm">
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.username}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
