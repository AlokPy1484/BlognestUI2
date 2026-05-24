"use client"


import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import WebSidebar from "./components/WebSidebar";



export default function page(){


  return(
    <div className="flex justify-between items-start px-2">
    <Feed/>
    </div>
  )
}