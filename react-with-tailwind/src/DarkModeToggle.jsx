import { useEffect, useState } from "react";

function DarkModeToggle(){
    const [isDarkMode, setisDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark';
        console.log('Initial theme from localStorage:', savedTheme, 'isDark:', isDark);
        return isDark;
    });

    useEffect(() => {
        const root = document.documentElement;
        console.log('useEffect triggered, isDarkMode:', isDarkMode);
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            console.log('Added dark class');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            console.log('Removed dark class');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        console.log('Toggle button clicked, current isDarkMode:', isDarkMode);
        setisDarkMode(prev => !prev);
    };

    return (
        <button 
        onClick={handleToggle}
        className="p-2 dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800 rounded">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;