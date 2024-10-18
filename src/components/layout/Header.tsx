import React, { useEffect, useRef, useState } from "react";
import {
  HomeIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PowerIcon,
  ArrowRightEndOnRectangleIcon,
  SunIcon,
  MoonIcon
} from "@heroicons/react/24/outline";
import AuthComponent from "../auth/AuthComponent";
import ThemeToggle from "../functions/ThemeToggle";
import Button from "../globals/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { login, logout } from "@/redux/slices/auth/authSlice";
import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const themeMode = useSelector((state: RootState) => state.theme.darkMode);
  const toggleMode = useSelector((state: RootState) => state.theme.mode);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleLogin = () => {
    dispatch(login()); // Simuler la connexion
  };

  const handleLogout = () => {
    dispatch(logout()); // Simuler la déconnexion
  };

  // Ferme le dropdown si l'utilisateur clique en dehors
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuOpenRef.current &&
      !menuOpenRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Nettoyage de l'event listener lors du démontage
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`p-4 flex xs:justify-between
        bg-secondary-dark
        justify-between items-center relative border-b-2 border-primary-dark dark:bg-black transition-all duration-300 ease-in-out`}
      ref={menuOpenRef}>
      {/* Logo */}

      <img
        src="/admin/images/logo.webp"
        alt="Logo"
        className="max-h-[150px] w-2/3 xs:w-3/6 sm:w-2/6 md:w-1/4 lg:w-1/5"
      />

      <div className="hidden sm:flex flex-end gap-1 items-center">
        <Button>
          <Link href={"/admin"}>Accueil</Link>
        </Button>
        <Button>Voir le site</Button>
        <Button>Déconnexion</Button>
        <Button onClick={toggleDropdown}>
          {themeMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className=" inline-block sm:hidden text-left">
        <Button onClick={toggleDropdown}>
          {menuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {menuOpen && (
        <div className="absolute right-0 top-20 mt-6 bg-white border-y-2 border-primary-dark w-full xs:w-1/2 md:w-1/5 shadow-lg grid grid-cols-1 scale-in-ver-top  dark:bg-secondary-accent">
          <ul className=" text-gray-700 divide-y-2 ">
            {/* Voir le site */}
            <li className="flex justify-between py-2 px-4 items-center cursor-pointer hover:bg-secondary-accent">
              <Link
                href="https://www.c2sportsprods.com"
                className="flex gap-2"
                rel="noopener noreferrer"
                target="_blank">
                Voir le site
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
              </Link>
            </li>
            {/* Login/Logout */}
            <li
              className="flex gap-2 py-2 px-4 items-center cursor-pointer hover:bg-secondary-accent"
              onClick={handleLogout}>
              Déconnexion
              <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
            </li>
            {/* Toggle Theme */}
            <li>
              <div className="flex justify-between px-4 py-2 items-center  cursor-pointer hover:bg-secondary-accent">
                Changer le thème
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
