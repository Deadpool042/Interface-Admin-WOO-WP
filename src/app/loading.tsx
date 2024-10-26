"use client";
import { useEffect, useState } from "react";

// src/app/loading.tsx
export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Temporisation pour afficher le chargement pendant au moins 2 secondes
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Nettoyage du timer à la fin
  }, []);

  if (!showLoading) return null;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-dark"></div>
    </div>
  );
}
