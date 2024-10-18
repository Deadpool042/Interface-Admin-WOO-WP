import React from "react";

// Définition des props avec les types TypeScript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean; // Ajouter un état de chargement
  className?: string;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "sm",
  disabled = false,
  loading = false, // Définir la valeur par défaut pour le chargement
  className = "",
  style
}) => {
  // Les classes de taille de bouton en fonction de la prop size
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-md",
    lg: "px-5 py-4 text-lg"
  };

  // Les classes par défaut pour le bouton
  const defaultClasses =
    "bg-primary-dark text-white border-2 border-background-dark dark:border-primary-dark hover:bg-background-dark hover:text-primary hover:border-primary dark:bg-secondary dark:hover:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-background-dark shadow-xl transition-colors duration-300 ease-in-out rounded-md";

  return (
    <button
      type={type}
      className={`${sizeClasses[size]} ${defaultClasses} ${className} flex items-center justify-center`} // Flex pour centrer le texte et le spinner
      onClick={onClick}
      disabled={disabled || loading} // Désactive si en chargement ou si désactivé
      style={{}}>
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
