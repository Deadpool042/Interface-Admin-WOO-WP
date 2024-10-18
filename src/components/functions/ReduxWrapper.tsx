"use client";
import React, { useEffect } from "react";

import store from "@/redux/store/store";
import { Provider } from "react-redux";

const ReduxWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  useEffect(() => {
    // Vérifie que le code s'exécute uniquement côté client
    if (typeof window !== "undefined") {
      const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

      if (matchDarkMode.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        {/* Ici tu peux ajouter un Header ou autre */}
        {children}
      </Provider>
    </>
  );
};

export default ReduxWrapper;
