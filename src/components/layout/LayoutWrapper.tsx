"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSystemTheme } from "../functions/useSystemTheme";
import { useAuth } from "../auth/AuthProvider";
import Sidebar from "../navigation/Sidebar";
import {
  closeSidebar,
  openSidebar,
  toggleSidebar
} from "@/redux/slices/theme/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useInactivityTimeout from "utils/hooks/useInactivityTimeout";
import Footer from "./Footer";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const dispatch = useDispatch();
  useSystemTheme();
  useInactivityTimeout();
  const { authToken, isLoggedIn } = useAuth();

  return (
    <>
      {!authToken && !isLoggedIn && (
        <div className="flex justify-center">
          <main className="">{children}</main>
        </div>
      )}
      {authToken && isLoggedIn && (
        <div className="dark:bg-dark-pattern  bg-no-repeat bg-cover  dark:bg-top transition-all duration-700 ease-in-out bg-light-pattern  inset-0 top-20 pointer-events-none fixed "></div>
      )}
      <div className="container-grid ">
        {/* <div className="flex flex-col  min-h-screen  "> */}
        {authToken && isLoggedIn && <Header />}

        {authToken && isLoggedIn && (
          <>
            <aside
              className={`sidebar transition-all duration-700 ease-in-out
              bg-slate-600/70 backdrop-blur-sm dark:bg-slate-950/90 dark:backdrop-blur-sm border-r-2 border-primary-dark
              
                 `}>
              <Sidebar />
            </aside>

            <main className="main transition-all duration-700 ease-in-out dark:bg-slate-700/70 bg-slate-400/80">
              {children}
            </main>

            <footer className="footer-grid bg-black z-50 text-white  flex items-center justify-center border-t-2 border-primary-dark">
              <Footer />
            </footer>
          </>
        )}
      </div>
    </>
  );
};

export default LayoutWrapper;
