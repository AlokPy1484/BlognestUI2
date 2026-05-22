"use client"


import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import WebSidebar from "./components/WebSidebar";



export default function page(){

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
    <div className="flex justify-between items-start px-2">
    <Feed/>
    <WebSidebar open={openWebSidebar}/>
    </div>
  )
}