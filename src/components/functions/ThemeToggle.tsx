import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/solid"; // Import des icônes
import { RootState } from "@/redux/store/store"; // Pour typer `useSelector`
import { toggleTheme } from "@/redux/slices/theme/themeSlice";
import Button from "../globals/Button";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode); // Le mode de thème actuel
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ferme le dropdown si l'utilisateur clique en dehors
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  // Fonction pour basculer entre les thèmes
  const handleToggle = (selectedTheme: "light" | "dark" | "system") => {
    dispatch(toggleTheme(selectedTheme));
    setDropdownOpen(false); // Ferme le dropdown après la sélection
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Nettoyage de l'event listener lors du démontage
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}>
      {/* Bouton principal pour ouvrir la liste */}
      <Button
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={() => setDropdownOpen(!isDropdownOpen)} // Bascule l'état du dropdown
        className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-md">
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5" />
        ) : theme === "light" ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <ComputerDesktopIcon className="h-5 w-5" />
        )}
        <span>
          {theme === "dark"
            ? "Sombre"
            : theme === "light"
            ? "Clair"
            : "Système"}
        </span>
      </Button>

      {/* Dropdown pour sélectionner le thème */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-lg ">
          <ul className="py-1">
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 
              dark:text-foreground-dark
              dark:hover:bg-gray-700 cursor-pointer dark:hover:text-foreground-dark"
              onClick={() => handleToggle("light")}>
              <span>Clair</span>
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100  dark:text-foreground-dark dark:hover:bg-gray-700 cursor-pointer dark:hover:text-foreground-dark"
              onClick={() => handleToggle("dark")}>
              <span>Sombre</span>
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100  dark:text-foreground-dark dark:hover:bg-gray-700 cursor-pointer dark:hover:text-foreground-dark"
              onClick={() => handleToggle("system")}>
              <span>Système</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
