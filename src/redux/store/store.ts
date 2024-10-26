// src/redux/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/slices/theme/themeSlice";
import headerReducer from "@/redux/slices/theme/headerSlice";
import sidebarReducer from "@/redux/slices/theme/sidebarSlice";
import { productApi } from "@/redux/services/products/productApi";

const store = configureStore({
  reducer: {
    theme: themeReducer, // Tu ajouteras d'autres reducers ici
    header: headerReducer,
    sidebar: sidebarReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
