'use client';
const toggleTheme = () => {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

function ToggleThemeButton() {
    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-fuchsia-500 text-white">
            Toggle Theme
        </button>
    );
}

function Header() {
    return (
        <header className="flex justify-center bg-fuchsia-700 p-2">
            <ToggleThemeButton />
            Header
        </header>
    );
}

export default Header;
