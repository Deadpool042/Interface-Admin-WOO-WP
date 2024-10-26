// src/contexts/QueryProvider.tsx
"use client"; // Déclaration "use client" nécessaire pour ce composant client

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// Créer une nouvelle instance de QueryClient
const queryClient = new QueryClient();

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
