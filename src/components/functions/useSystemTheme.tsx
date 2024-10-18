import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/theme/themeSlice";
import { RootState } from "@/redux/store/store";

export const useSystemTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // Vérifie s'il y a un thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem("theme");
    const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // useEffect(() => {
    if (savedTheme === "dark" || matchDarkMode) {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    }

    switch (savedTheme) {
      case "system":
        dispatch(toggleTheme(savedTheme));
        console.log(`mode  ${theme}  sélectionné`);
        break;
      case "light":
        dispatch(toggleTheme(savedTheme));
        console.log(`mode  ${theme}  sélectionné`);
        break;
      case "dark":
        dispatch(toggleTheme(savedTheme));

        console.log(`mode  ${savedTheme}  sélectionné`);
        break;
    }
    const handleSystemChange = (e: MediaQueryListEvent | Event) => {
      const matches = (e as MediaQueryListEvent).matches;
      console.log("handleSystemChange:", matches);
      if (theme === "system") {
        if (matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    matchDarkMode.addEventListener("change", handleSystemChange);

    //     // // Nettoyage du listener lorsque le composant est démonté
    return () => {
      matchDarkMode.removeEventListener("change", handleSystemChange);
    };
  }, [theme]);
};
