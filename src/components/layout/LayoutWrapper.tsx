"use client";
import React from "react";
import Header from "./Header";
import { useSystemTheme } from "../functions/useSystemTheme";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  useSystemTheme();
  return (
    <div className="grid grid-rows-layout h-screen">
      <Header />

      {/* Main with scrollable content */}
      <main className="overflow-y-auto flex-grow ">{children}</main>

      <footer className="bg-black text-white h-12 flex items-center justify-center">
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default LayoutWrapper;
