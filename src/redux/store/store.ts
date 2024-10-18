// src/redux/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/slices/theme/themeSlice";
import authReducer from "@/redux/slices/auth/authSlice";
import headerReducer from "@/redux/slices/theme/headerSlice";
import sidebarReducer from "@/redux/slices/theme/sidebarSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer, // Tu ajouteras d'autres reducers ici
    auth: authReducer,
    header: headerReducer,
    sidebar: sidebarReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
