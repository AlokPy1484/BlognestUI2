import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PeopleCard from "./PeopleCard";
import SubscriptionBanner from "./SubsceiptionBanner";
import BlogFeedCardSmall from "./BlogFeedCardSmall";
import { cn } from "@/lib/utils";


export default function WebSidebar(props){

    interface RecommenedPeoplesType {
        username: string,
        description: string
    }

    const RecommenedPeoples :RecommenedPeoplesType[] = [
        {username: "Tim Cook", description: "Design Engineer"},
        {username: "Linus Torvalds", description: "Software Engineer"},
        {username: "Sam Altman", description: "AI Researcher"},
        {username: "Jensen Huang", description: "Polymath"}
    ]



    return(
        <ScrollArea className= {cn(props.open ? "md:flex "  : "md:hidden" ,"hidden h-full")}> 
        <div className="flex flex-col justify-start itemns-center border border-zinc-100 gap-6 p-4 w-[350px]">
            <SubscriptionBanner/>
            <div className="flex flex-col justify-center items-start gap-4 p-2">
                <a className="font-bold text-[16px] pb-2">People you might be interested</a>
                {RecommenedPeoples.map((people)=>(
                    <PeopleCard username={people.username} description={people.description}/>
                ))}
            </div>            
            <div className="flex flex-col justify-start items-start gap-4 p-3">
                <a className="font-bold text-[16px] pb-2">My reading list</a>
                <BlogFeedCardSmall/>
                <BlogFeedCardSmall/>
                <BlogFeedCardSmall/>
            </div>
        </div>
        <ScrollBar/>
        </ScrollArea>
    )
}