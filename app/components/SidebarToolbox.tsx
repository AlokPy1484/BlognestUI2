import { Button } from "@/components/ui/button"
import { FilePenLine, Home, PenIcon, Search } from "lucide-react"



export default function Toolbar(){


    const toolbarItems = [
        {name: "home", icon:<Home/>},
        {name: "write", icon:<PenIcon/>},
        {name: "edit", icon:<FilePenLine/>},
        {name: "discover", icon:<Search/>}
    ]

    return(
        <div className="flex justify-center items-center p-1 border border-zinc-200 rounded-md">
            {toolbarItems.map((item)=>(
                <Button className="bg-white text-black">{item.icon}</Button>
            ))}
        </div>
    )
}