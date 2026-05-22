import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Menu, PenLine, Search } from "lucide-react";



export default function Navbar(){


    const navigators : Array<{id: number; name: string}> = [
        {id: 1 , name: "Stories"},
        {id: 2 , name: "Writes"},
        {id: 3, name: "About"},
        {id: 4, name: "Write"}      
    ]

    return(
        <div className="flex justify-between items-center px-2 w-full py-4 bg-white text-black ">
            <div className="flex justify-between items-center gap-4">
                 <button className="font-serif font-semibold text-2xl">BlogNest</button>
                 <div className="flex justify-center gap-4 p-1 items-center rounded-2xl bg-zinc-100">
                    <Search strokeWidth={1}/>
                    <input placeholder="Search" className="outline-none w-25 md:w-full" />
                 </div>
            </div>
            <div className="flex justify-center items-center gap-4">
            {/* <Button variant={"outline"} className="flex md:hidden"><Search/></Button> */}
            <Button className="flex gap-2 md:px-4 font-sans font-bold"><PenLine/><a >Write</a> </Button>
            <Button variant={"outline"} ><Bell/></Button>
            <Button className="rounded-full p-0">
                <Avatar>
                <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                alt="Profile Picture"
                className="rounded-full"/>
                <AvatarFallback>AP</AvatarFallback>
                </Avatar>
            </Button>
            </div>
        </div>
    )
}