"use client";
import React, { useEffect, useState } from "react";

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
import Button from "../globals/Button";
import { usePathname, useSearchParams } from "next/navigation";

const navLinks = [
  {
    label: "Accueil",
    href: "/",
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

function Sidebar() {
  const pathname = usePathname(); // Récupère l'URL actuelle
  const searchParams = useSearchParams();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(pathname);

    // console.log(pathname);
  }, [pathname, searchParams]);

  return (
    <nav className="p-2 flex justify-center">
      <ul className="">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="tooltip  tooltip-right w-full"
              replace
              key={index}
              href={link.href}>
              <Button
                className={`   w-[50px] sm:w-full  my-1 ${
                  activeLink.startsWith(link.href + "/") ||
                  activeLink === link.href
                    ? "dark:!bg-primary-dark dark:text-background-dark bg-background-dark border-primary text-primary"
                    : ""
                }`}>
                <span
                  className="flex items-center gap-2 w-full tooltip  tooltip-right"
                  data-tip={link.label}>
                  <span className="">{link.icon}</span>
                  <span className="opacity-0 sm:opacity-100 sm:translate-x-0 -translate-x-full transition-all duration-900 ease-in-out">
                    {link.label}
                  </span>
                </span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
