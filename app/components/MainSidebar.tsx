import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Toolbar from "./SidebarToolbox"
import { BadgeInfo, Bell, ChartBarStacked, Folder, FoldHorizontal, Home, MessageCircleQuestionMark, Settings, Shuffle } from "lucide-react"
import { Separator } from "radix-ui"
import { Button } from "@/components/ui/button"

export function MySidebar() {

  const SidebarItems = [
    {name: "My Feed", icon:<Home/>},
    {name: "Notification", icon:<Bell/>},
    {name: "Category", icon:<ChartBarStacked/>},
    {name: "Shuffle", icon:<Shuffle/>}
  ]

  const ReadingListItems = [
    {name:"Read Later List"},
    {name:"Technology: College proj.."}
  ]

  const AdminListItems = [
    {name:"Setting", icon:<Settings/>},
    {name: "Help", icon:<MessageCircleQuestionMark/>},
    {name: "FAQ", icon:<BadgeInfo/>}
  ]

  return (
    <Sidebar>
        <SidebarHeader>AlokPandey4592/Blogs/home</SidebarHeader>
      <SidebarContent>
        <SidebarSeparator />
        <SidebarGroup className="flex justify-center items-center gap-2">
        <Toolbar/>
        <SidebarSeparator />
        </SidebarGroup >
         <SidebarGroup>
        <div className="flex flex-col justify-center items-start gap-6 p-4">
          {SidebarItems.map((item)=>(
            <Button variant={"ghost"} className="flex justify-start items-center w-full  gap-4">{item.icon} {item.name}</Button>
          ))}
        </div>
        <SidebarSeparator />
         </SidebarGroup>
         <SidebarGroup className="flex flex-col justify-center items-start gap-4">
         <div className="text-[14px]">
          READING LIST
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            {ReadingListItems.map((item)=>(
            <Button variant={"ghost"} className="flex justify-center items-center gap-4"><Folder/>{item.name}</Button>
            ))}
          </div>
          <SidebarSeparator />
          </SidebarGroup>
          <SidebarGroup>
            <div className="flex flex-col justify-center items-start gap-6 p-4">
              {AdminListItems.map((item)=>(
              <Button variant={"ghost"} className="flex justify-start items-center w-full  gap-4">{item.icon} {item.name}</Button>
          ))}
        </div>
        <SidebarSeparator />
         </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}