/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr 45px" // Header s'adapte au contenu, main prend tout l'espace, footer 45px
      },

      screens: {
        xs: "376px"
      },
      colors: {
        // Palette principale
        primary: "var(--primary)",

        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "primary-accent": "var(--primary-accent)",

        // Palette secondaire
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-accent": "var(--secondary-accent)",

        // Palette tertiaire (Violet)
        tertiary: "var(--tertiary)",
        "tertiary-light": "var(--tertiary-light)",
        "tertiary-dark": "var(--tertiary-dark)",
        "tertiary-accent": "var(--tertiary-accent)",

        // Couleurs de succès
        success: "var(--success)",
        "success-light": "var(--success-light)",
        "success-dark": "var(--success-dark)",
        "success-accent": "var(--success-accent)",

        // Couleurs d'avertissement
        warning: "var(--warning)",
        "warning-light": "var(--warning-light)",
        "warning-dark": "var(--warning-dark)",
        "warning-accent": "var(--warning-accent)",

        // Couleurs d'erreur
        error: "var(--error)",
        "error-light": "var(--error-light)",
        "error-dark": "var(--error-dark)",
        "error-accent": "var(--error-accent)",

        // Couleurs d'information
        info: "var(--info)",
        "info-light": "var(--info-light)",
        "info-dark": "var(--info-dark)",
        "info-accent": "var(--info-accent)",

        // Couleurs de fond et de texte
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-dark": "var(--background-dark)",
        "foreground-dark": "var(--foreground-dark)",

        // Couleurs neutres
        black: "var(--black)",
        white: "var(--white)",
        "gray-light": "var(--gray-light)",
        "gray-dark": "var(--gray-dark)"
      },
      transitionProperty: {
        transform: "transform"
      },
      backgroundImage: {
        "light-pattern": "url('/images/bg-light.webp')",
        "dark-pattern": "url('/images/bg-dark.webp')"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui")
  ]
};
