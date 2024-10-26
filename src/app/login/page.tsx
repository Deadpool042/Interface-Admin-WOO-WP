"use client";
import { useAuth } from "@/components/auth/AuthProvider";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Login() {
  const router = useRouter();
  const { authToken, isLoggedIn } = useAuth();
  // console.log("page login:", authToken);
  // // Rediriger si déjà connecté
  useEffect(() => {
    if (authToken) {
      router.replace("/");
    }
  }, [authToken, router]);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default Login;
