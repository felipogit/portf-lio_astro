import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className="w-full flex items-center justify-center bg-pink-500 text-white dark:bg-zinc-800 dark:text-white h-20  ">
            <ul className="w-full max-w-6xl mx-auto h-8 flex items-center justify-between">
                <li className="text-xl cursor-pointer ">Home</li>
                <li className="text-xl cursor-pointer">Sobre</li>
                <li className="text-xl cursor-pointer">Habilidades</li>
                <li className="text-xl cursor-pointer">Serviços</li>
                <li className="text-xl cursor-pointer">Portfólio</li>
                <li className="text-xl cursor-pointer">Contato</li>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <MdOutlineLightMode size={30} /> : <MdOutlineDarkMode size={30} />}
                </button>
            </ul>
        </header>
    );
};
