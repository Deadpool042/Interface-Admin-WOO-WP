// src/app/not-found.tsx

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page non trouvée</h2>
      <p className="text-lg mt-2">
        Désolé, la page que vous cherchez n'existe pas.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
