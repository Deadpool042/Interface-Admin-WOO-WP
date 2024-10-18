// src/redux/slices/AuthSlice.ts

import { createSlice } from "@reduxjs/toolkit";

// Interface représentant l'état d'authentification
interface AuthState {
  isLogged: boolean;
}

// État initial avec l'utilisateur non connecté
const initialState: AuthState = {
  isLogged: false
};

// Création du slice Redux pour l'authentification
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action pour simuler la connexion de l'utilisateur
    login(state) {
      state.isLogged = true; // Mise à jour de l'état de connexion
    },
    // Action pour simuler la déconnexion de l'utilisateur
    logout(state) {
      state.isLogged = false; // Mise à jour de l'état de déconnexion
      console.log("Déconnecté");
    }
  }
});

// Export des actions générées par le slice
export const { login, logout } = authSlice.actions;

// Export du reducer pour l'intégrer dans le store
export default authSlice.reducer;
