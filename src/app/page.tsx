"use client";

import AuthComponent from "@/components/auth/AuthComponent";
import Button from "@/components/globals/Button";
// import Header from "@/components/globals/Header";
// import Sidebar from "@/components/globals/Sidebar";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <div className="bg-[rgba(117,117,117,0.8)] dark:bg-slate-900/80 p-4">
      <h1>Page principale</h1>
      <Button>
        <Link href="/admin/products">Produits</Link>
      </Button>
    </div>
  );
}
