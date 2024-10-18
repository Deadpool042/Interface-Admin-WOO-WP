import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/animations/animations.css";
import ReduxWrapper from "@/components/functions/ReduxWrapper";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-foreground dark:text-foreground-dark dark:bg-background-dark bg-background relative transition-all duration-500 ease-in-out`}>
        {/* <div className="dark:bg-dark-pattern  bg-no-repeat bg-cover  dark:bg-top transition-all duration-700 ease-in-out bg-light-pattern fixed inset-0 pointer-events-none "></div> */}
        <ReduxWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
