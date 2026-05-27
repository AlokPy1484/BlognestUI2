"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MySidebar } from "./components/MainSidebar";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import WebSidebar from "./components/WebSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "BlogNest",
//   description: "Solcial Networking Platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  const [openSidebar, setOpenSidebar] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 1205)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])


  const [openWebSidebar, setOpenWebSidebar] = useState(true)

  useEffect(() => {
      const handleResize = () => {
        setOpenWebSidebar(window.innerWidth >= 950)}


        handleResize()
        window.addEventListener("resize" , handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
        }
        
      
  },[])



  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex flex-row justify-start items-center z-10">
        {/* <SidebarTrigger className="bg-white h-full"/> */}
        {/* <Navbar/> */}
        </div>
        <div className="flex ">
        {children}
        {/* <WebSidebar open={openWebSidebar}/> */}
        </div>
        </body>
    </html>

  );
}
