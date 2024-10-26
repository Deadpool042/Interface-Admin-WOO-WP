"use client";
import { useAuth } from "@/components/auth/AuthProvider";

import React from "react";

function Dashboard() {
  const { authToken, isLoggedIn } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;
