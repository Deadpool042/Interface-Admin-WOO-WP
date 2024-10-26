"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Définir une durée minimale de 1 seconde (1000 ms)
  const minimumLoadingDuration = 1000;

  useEffect(() => {
    const sessionToken = Cookies.get("session_token");
    const start = Date.now(); // Stocker le moment du début du chargement

    // Simuler un temps de chargement minimum
    const checkAuth = () => {
      const elapsedTime = Date.now() - start; // Temps écoulé depuis le début du chargement
      const remainingTime = Math.max(minimumLoadingDuration - elapsedTime, 0); // Calculer le temps restant

      setTimeout(() => {
        if (sessionToken) {
          setAuthToken(sessionToken);
          setIsLoggedIn(true);
        } else {
          setAuthToken(null);
          setIsLoggedIn(false);
        }

        setLoading(false); // Terminer le chargement
      }, remainingTime); // Attendre le temps restant pour atteindre la durée minimale
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-dark"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        authToken,
        setAuthToken
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
};
