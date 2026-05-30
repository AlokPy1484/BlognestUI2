"use client"


import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import WebSidebar, { ProfileSideBar } from "../components/WebSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { MySidebar } from "../components/MainSidebar";
import ProfilePage from "./profile/page";



export default function page(){

  // const [openSidebar, setOpenSidebar] = useState(true)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setOpenSidebar(window.innerWidth >= 1205)
  //   }

  //   handleResize()

  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // },[])

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


  return(
    // <div className="flex justify-between items-start px-2">
    // <Feed/>
    // </div>


      // <SidebarProvider open={openSidebar}>
      // <MySidebar />
      // <SidebarInset>
    <html
      lang="en"
      className=" h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* <Navbar/> */}

        <div className="flex justify-between  w-full">
          
        <Feed/>
        <WebSidebar open={openWebSidebar}/>
        {/* <ProfilePage/>
        <ProfileSideBar/> */}
        </div>
        </body>
    </html>
    // </SidebarInset>
    // </SidebarProvider>
  )
}