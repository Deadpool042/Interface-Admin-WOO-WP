// src/redux/slices/sidebarSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean; // État pour savoir si la sidebar est ouverte ou fermée
}

const initialState: SidebarState = {
  isOpen: true // Par défaut, la sidebar est fermée
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen; // Alterne entre ouvert et fermé
    },
    openSidebar: state => {
      state.isOpen = true; // Ouvre la sidebar
    },
    closeSidebar: state => {
      state.isOpen = false; // Ferme la sidebar
    }
  }
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
