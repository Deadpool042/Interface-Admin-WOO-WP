import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { login, logout } from "@/redux/slices/auth/authSlice";
import Button from "../globals/Button";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";

const AuthComponent: React.FC = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);

  const [isClientReady, setIsClientReady] = useState(false);

  // Effect pour détecter que le composant est prêt côté client
  useEffect(() => {
    setIsClientReady(true); // Quand le composant est monté côté client
  }, []);

  const handleLogin = () => {
    dispatch(login()); // Simuler la connexion
  };

  const handleLogout = () => {
    dispatch(logout()); // Simuler la déconnexion
  };
  // Si la largeur d'écran n'est pas encore connue, cacher le header
  if (!isClientReady) {
    return null;
  }

  return (
    <>
      {isLogged ? (
        <>
          <Button
            onClick={handleLogout}
            className="">
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
            <span className="truncate">Connexion</span>
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={handleLogin}
            className="">
            {" "}
            <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
            <span className="truncate">Déconnexion</span>
          </Button>
        </>
      )}
    </>
  );
};

export default AuthComponent;
