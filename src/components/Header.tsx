import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu, MdClose } from "react-icons/md";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    return (
        <header className="w-full flex items-center justify-between fixed top-0 left-0 z-50 bg-pink-500 text-white dark:bg-zinc-800 dark:text-white h-20 px-4">
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                <div className="flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
                    </button>
                    <ul className={`fixed top-20 left-0 w-full bg-pink-500 dark:bg-zinc-800 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex md:translate-x-0 md:bg-transparent md:dark:bg-transparent md:space-x-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start`}>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600 ">Home</li>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600">Sobre</li>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600">Habilidades</li>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600">Serviços</li>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600">Portfólio</li>
                        <li className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600">Contato</li>
                    </ul>
                </div>
                <button onClick={() => setDarkMode(!darkMode)} className="md:ml-4">
                    {darkMode ? <MdOutlineLightMode size={30} /> : <MdOutlineDarkMode size={30} />}
                </button>
            </div>
        </header>
    );
};
