import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu, MdClose, } from "react-icons/md";

import clsx from "clsx";

const Menus = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Sobre",
    path: "#sobre",
  },
  {
    label: "Projetos",
    path: "/projetos",}
];

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    Boolean(localStorage.getItem("darkMode"))
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDarkModeSelectorClick = () => {
    setDarkMode((prevState) => !prevState);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full flex items-center justify-between sticky top-0 left-0 z-50 bg-pink-500 text-white dark:bg-zinc-800 dark:text-white h-20 px-4">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen((prevState) => !prevState)}
            className="md:hidden"
          >
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
          <ul
            className={clsx(
              "fixed top-20 left-0 w-full bg-pink-500 dark:bg-zinc-800 transition-transform transform md:static md:flex md:translate-x-0 md:bg-transparent md:dark:bg-transparent md:space-x-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-start",
              menuOpen && "translate-x-0",
              !menuOpen && "-translate-x-full"
            )}
          >
            {Menus.map((menu) => (
              <a href={menu.path}>
                <li
                  className="w-full text-xl cursor-pointer p-4 md:p-0 md:mx-auto hover:bg-pink-600 dark:hover:bg-black"
                  key={menu.label}
                >
                  {menu.label}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <button onClick={handleDarkModeSelectorClick} className="md:ml-4">
          {darkMode ? (
            <MdOutlineLightMode size={30} />
          ) : (
            <MdOutlineDarkMode size={30} />
          )}
        </button>
      </div>
    </header>
  );
};
