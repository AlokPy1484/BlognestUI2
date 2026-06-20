"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarSeparator,
    useSidebar
} from "@/components/ui/sidebar"
import { BadgeInfo, Bell, ChartBarStacked, FilePenLine, Folder, FoldHorizontal, Home, MessageCircleQuestionMark, PenIcon, Search, Settings, Shuffle } from "lucide-react"
import { Separator } from "radix-ui"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"


const toolbarItems = [
    { name: "home", icon: <Home /> },
    { name: "write", icon: <PenIcon /> },
    { name: "edit", icon: <FilePenLine /> },
    { name: "discover", icon: <Search /> }
]

export function MainSidebar() {

    const SidebarItems = [
        { name: "My Feed", icon: <Home /> },
        { name: "Notification", icon: <Bell /> },
        { name: "Category", icon: <ChartBarStacked /> },
        { name: "Shuffle", icon: <Shuffle /> }
    ]

    const ReadingListItems = [
        { name: "Read Later List" },
        { name: "Technology: College proj.." }
    ]

    const AdminListItems = [
        { name: "Setting", icon: <Settings /> },
        { name: "Help", icon: <MessageCircleQuestionMark /> },
        { name: "FAQ", icon: <BadgeInfo /> }
    ]

    const { open } = useSidebar()

    return (
        <Sidebar className="relative group" collapsible="icon">
            <SidebarContent>
                <SidebarSeparator />
                {open &&
                    <SidebarGroup className="flex justify-center items-center gap-2">
                        <div className="flex justify-center items-center p-1 border border-zinc-200 rounded-md">
                            {toolbarItems.map((item) => (
                                <Button variant="ghost" className="bg-white text-black">{item.icon}</Button>
                            ))}
                        </div>
                        <SidebarSeparator />
                    </SidebarGroup >}
                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center items-start gap-6 transition-translate duration-300 ease-in-out", open && "p-4")}>
                        {SidebarItems.map((item) => (
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant={"ghost"} className="flex justify-start items-center w-full  gap-4">{item.icon} {open && item.name}</Button>
                                </TooltipTrigger>
                                {!open &&
                                    <TooltipContent side="right" className="z-100">
                                        <a>{item.name}</a>
                                    </TooltipContent>}
                            </Tooltip>
                        ))}
                    </div>
                    <SidebarSeparator />
                </SidebarGroup>
                {open &&
                    <SidebarGroup className="flex flex-col justify-center items-start gap-4">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <div className="text-[14px]">
                                READING LIST
                            </div>
                            {ReadingListItems.map((item) => (
                                <Button variant={"ghost"} className="flex justify-center items-center gap-4"><Folder />{item.name}</Button>
                            ))}
                        </div>
                        <SidebarSeparator />
                    </SidebarGroup>}
                <SidebarGroup>
                    <div className={cn("flex flex-col justify-center items-start gap-6 transition-translate duration-300 ease-in-out", open && "p-4")}>
                        {AdminListItems.map((item) => (
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant={"ghost"} className="flex justify-start items-center w-full  gap-4">{item.icon} {open && item.name}</Button>
                                </TooltipTrigger>
                                {!open &&
                                    <TooltipContent side="right" className="z-100">
                                        <a>{item.name}</a>
                                    </TooltipContent>}
                            </Tooltip>
                        ))}
                    </div>
                    <SidebarSeparator />
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}