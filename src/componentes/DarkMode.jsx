import React from 'react'
import { useDarkMode } from '../context/ThemeContext'

function DarkMode() {
    const {darkMode, setDarkMode} = useDarkMode()

    return (
        <button onClick={() => setDarkMode(!darkMode)} className='px-6 py-2 bg-gray-200 dark:bg-gray-800 cursor-pointer rounded-md transition-all'>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    )
}

export default DarkMode