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
import ThemeToggle from "../functions/ThemeToggle";
import Button from "../globals/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import LogoutButton from "../globals/LogoutButton";
import { useLogout } from "utils/hooks/authHooks";
import { useAuth } from "../auth/AuthProvider";
import { toggleSidebar } from "@/redux/slices/theme/sidebarSlice";
import Image from "next/image";

export default function Header() {
  const dispatch = useDispatch();
  const logoutMutation = useLogout();
  const { authToken, isLoggedIn } = useAuth();
  const themeMode = useSelector((state: RootState) => state.theme.darkMode);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar()); // Appelle l'action pour alterner entre ouvert/fermé
  };
  const toggleDropdown = () => {
    setMenuOpen(prevState => !prevState);
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
      className={`p-4  flex xs:justify-between
        bg-secondary-dark
        justify-between items-center  border-b-2 border-primary-dark dark:bg-black transition-all duration-300 ease-in-out z-50 `}
      ref={menuOpenRef}>
      {/* Logo */}

      <Image
        src="/images/logo.webp"
        alt="Logo"
        width={150}
        height={150}
      />

      <div className="hidden sm:flex  flex-end gap-1 items-center">
        <Button>
          <Link href={"/"}>Accueil</Link>
        </Button>
        <Button>Voir le site</Button>
        <LogoutButton />
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
            <XMarkIcon className="h-4 w-4" />
          ) : (
            <Bars3Icon className="h-4 w-4" />
          )}
        </Button>
      </div>

      {menuOpen && (
        <div className="absolute right-0 top-20 mt-6 bg-white border-y-2 border-primary-dark w-full xs:w-1/2 md:w-64 rounded-md  shadow-lg grid grid-cols-1 scale-in-ver-top  dark:bg-secondary-accent">
          <ul className=" text-gray-700 divide-y-2  ">
            {/* Voir le site */}
            <li className="flex sm:hidden justify-between py-2 px-4 items-center cursor-pointer hover:bg-secondary-accent">
              <Link
                href="https://www.laurent.c2sportsprod.com"
                className="flex  gap-2"
                rel="noopener noreferrer"
                target="_blank">
                Voir le site
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
              </Link>
            </li>
            {/* Login/Logout */}
            {authToken && isLoggedIn && (
              <li
                className="flex sm:hidden gap-2 py-2 px-4 items-center cursor-pointer hover:bg-secondary-accent"
                onClick={() => logoutMutation.mutate()}>
                Se déconnecter
                <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
              </li>
            )}
            {/* Toggle Theme */}
            <li>
              <div className="flex justify-between px-4 py-2 items-center  cursor-pointer hover:bg-secondary-accent ">
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
