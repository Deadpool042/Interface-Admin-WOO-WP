import {
  ArrowRightIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  ShoppingBagIcon,
  TagIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../globals/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { toggleSidebar } from "@/redux/slices/theme/sidebarSlice";
import {
  ArrowLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from "@heroicons/react/24/solid";

function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMobileMenu = function handleMenu() {
    setIsMobile(prevState => !prevState);
  };
  const navLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <HomeIcon className="h-6 w-6" />
    },
    {
      label: "Produits",
      href: "/products",
      icon: <ShoppingBagIcon className="h-6 w-6" />
    },
    {
      label: "Commandes",
      href: "/orders",
      icon: <ClipboardIcon className="h-6 w-6" />
    },
    {
      label: "Clients",
      href: "/members",
      icon: <UsersIcon className="h-6 w-6" />
    },
    {
      label: "Coupons",
      href: "/marketing",
      icon: <TagIcon className="h-6 w-6" />
    },
    {
      label: "Statistiques",
      href: "/statistics",
      icon: <ChartBarIcon className="h-6 w-6" />
    },
    {
      label: "Articles",
      href: "/articles",
      icon: <DocumentTextIcon className="h-6 w-6" />
    },
    {
      label: "Avis",
      href: "/reviews",
      icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
    },
    {
      label: "Paramètres",
      href: "/settings",
      icon: <CogIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      <ul className="space-y-2  p-4">
        {/* Desktop and larger view with labels */}
        <Button
          onClick={() => dispatch(toggleSidebar())}
          className=" justify-center m-auto mt-6  ">
          {/* Desktop view */}

          {isSidebarOpen ? (
            <ArrowLeftIcon className="h-6 w-6" />
          ) : (
            <ArrowRightIcon className="h-6 w-6" />
          )}
        </Button>

        <nav className="space-y-2 flex flex-col  pt-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="list-none">
              <Link
                key={index}
                passHref
                replace
                href={link.href}
                className="transition-all duration-700  ease-in-out ">
                <Button className=" size-full transition-all  duration-150 ease-in-out ">
                  <div className="flex gap-2">
                    {link.icon}
                    {/* Afficher le label uniquement si la sidebar est ouverte et pas sur mobile */}
                    {isSidebarOpen && !isMobile && (
                      <span className="truncate">{link.label}</span>
                    )}
                    {/* Sur mobile, cacher complètement le label */}
                    {isMobile && <span className="hidden">{""}</span>}
                  </div>
                </Button>
              </Link>
            </li>
          ))}
        </nav>

        {isMobile && (
          <nav className="space-y-2 flex flex-col  pt-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="list-none">
                <Link
                  key={index}
                  passHref
                  replace
                  href={link.href}
                  className="transition-all duration-700  ease-in-out ">
                  <Button className=" size-full transition-all  duration-150 ease-in-out ">
                    <div className="flex gap-2">
                      {link.icon}
                      {/* Afficher le label uniquement si la sidebar est ouverte et pas sur mobile */}

                      <span className="truncate">{link.label}</span>

                      {/* Sur mobile, cacher complètement le label */}
                    </div>
                  </Button>
                </Link>
              </li>
            ))}
          </nav>
        )}
      </ul>
    </>
  );
}

export default Sidebar;
