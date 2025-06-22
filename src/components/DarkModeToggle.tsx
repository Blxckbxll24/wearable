import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('dark-mode');
        if (stored === 'true') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else if (stored === 'false') {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
                setIsDark(true);
            }
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            console.log('Dark mode toggled');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'false');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'true');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
            type="button"
        >
            {isDark ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
    );
};
