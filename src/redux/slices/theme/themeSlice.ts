import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean; // Utilisé pour savoir si le mode sombre est activé
  mode?: "light" | "dark" | "system"; // Le mode de thème choisi (clair, sombre ou système)
}

const initialState: ThemeState = {
  darkMode: false, // Mode sombre désactivé par défaut
  mode: "system" // Par défaut, on suit le mode système
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (
      state,
      action: PayloadAction<"light" | "dark" | "system">
    ) => {
      state.mode = action.payload;
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      switch (action.payload) {
        case "dark":
          state.darkMode = true;
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");

          break;

        case "light":
          state.darkMode = false;
          localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
          break;

        case "system":
        default:
          // Si 'system' est sélectionné, il bascule selon la préférence système
          state.darkMode = prefersDarkMode;
          if (prefersDarkMode) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          localStorage.setItem("theme", "system");
          break;
      }
    }
  }
});

// Exporter l'action
export const { toggleTheme } = themeSlice.actions;

// Exporter le reducer pour le store
export default themeSlice.reducer;
