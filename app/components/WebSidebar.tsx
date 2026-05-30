import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PeopleCard from "./PeopleCard";
import SubscriptionBanner from "./SubsceiptionBanner";
import BlogFeedCardSmall from "./BlogFeedCardSmall";
import { cn } from "@/lib/utils";
import { Cake, Link, Mail, Map } from "lucide-react";
import { Separator } from "@/components/ui/separator";


const ProfileInfo = [
    {   
        id: 1,
        name: "location",
        icon: <Map/>,
        content: "Maxico",
    },
    {
        id: 2,
        name: "date_joined",
        icon: <Cake/>,
        content: "joined on Mar 18, 2022"
    },
    {
        id: 3,
        name: "email",
        icon: <Mail/>,
        content: "jack2daniel@gmail.com"
    },
    {
        id: 4,
        name: "profileLink",
        icon: <Link/>,
        content: "htpps://jackdanial.blognet.io"
    }
]

const peoples = [
  { name: "Alice Johnson", description: "Software Engineer at Cornflakes" },
  { name: "Bob Smith",     description: "UI/UX Designer at Cornflakes" },
  { name: "Carol White",   description: "Marketing Lead at Cornflakes" },
  { name: "David Brown",   description: "DevOps Engineer at Cornflakes" },
  { name: "Eva Martinez",  description: "Product Manager at Cornflakes" },
];


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
        <ScrollArea className= {cn(props.open ? "flex "  : "hidden" ,"justify-end")}> 
        <div className="flex flex-col justify-start itemns-center border border-black/10 bg-neutral-100/50 gap-6 p-4 w-[350px]">
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



export function ProfileSideBar(props){

    return(


    <div className={cn(props.open? "flex" : "hidden",  "flex-col justify-start items-start gap-4 p-4 border border-black/10 w-[450px]")}>
        <div className="flex flex-col justify-start items-start gap-4 w-full">
            <h1 className="text-xl font-bold">Jack Danial</h1>
            <p className="text-sm text-black/60">I'm just a random Brazilian guy with a passion for front-end development and learning things.</p>
            <div className="flex justify-start flex-wrap gap-4">
                {ProfileInfo.map((data) => (
                    <div className="flex items-center gap-1 text-sm"> 
                        {data.icon}
                        <a>{data.content}</a>
                    </div>
                ))}

            </div>
            <Separator/>

            <div className="flex flex-col justify-start items-start text-sm">
                <h1  className="font-semibold">Education</h1>
                <a>Masters degree in Mechanical Engineering</a>
            </div>

            <div className="flex flex-col justify-start items-start text-sm">
                <h1 className="font-semibold">Work</h1>
                <a>Project manager at Infosys</a>
            </div>
            <Separator/>

            <h1 className="text-xl font-semibold">Following</h1>
            <div className="flex flex-col justify-start items-start gap-2">
                {peoples.map((people) => (
                    <PeopleCard username={people.name} description={people.description}/>
                ) )}
                    
            </div>
        </div>

    </div>)
}