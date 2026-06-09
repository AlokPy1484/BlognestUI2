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


interface SidebarProps{
    open: boolean
}

export default function WebSidebar(props:SidebarProps){

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

    const BlogListing = [
    {
        id: 1,
        author: "Jack Danial",
        date: "Apr 16,2022",
        description: "Good person and System Architect",
        blogTitle: "8 Psychology-Based Design Hacks That Will Make You A Better UX Designer",
        blogDescription: "If the first thought that crossed your mind when you read the title of the article was What does Psychology has to do with UX Design? then, yes, thats what we thought too, now that we're on the same page, let's end this article here. Cheers!",
        imageLink: "https://images.unsplash.com/photo-1777895868494-4e01af8487b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        author: "Sarah Mitchell",
        date: "May 08,2022",
        description: "Creative thinker and Product Strategist",
        blogTitle: "7 User Research Techniques That Will Improve Your Product Design Skills",
        blogDescription: "If your immediate reaction after reading the title was How can research improve product decisions? then, yes, we had the same question too, now that curiosity has brought us here, let's continue this journey together. Cheers!",
        imageLink: "https://images.unsplash.com/photo-1779029314445-b20031dfd4e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        author: "Michael Carter",
        date: "Jun 14,2022",
        description: "Smart leader and Software Consultant",
        blogTitle: "9 Interface Design Principles That Will Help You Create Better Experiences",
        blogDescription: "If the first thing that crossed your mind after reading the title was Why do interfaces matter so much? then, yes, that was our exact thought too, now that we agree on something, let's continue this discussion here. Cheers!",
        imageLink: "https://plus.unsplash.com/premium_photo-1777558740424-013f500e7199?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }]



    return(
        <ScrollArea className= {cn(props.open ? "md:flex "  : "hidden" ,"hidden justify-end relative")}> 
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
                {BlogListing.map((blog)=>(
                    <BlogFeedCardSmall imageLink={blog.imageLink} author={blog.author}/>
                ))}
            </div>
        </div>
        <ScrollBar/>
        </ScrollArea>
    )
}



export function ProfileSideBar(props:SidebarProps){

    return(


    <div className={cn(props.open? "md:flex" : "hidden",  "hidden flex-col justify-start items-start gap-4 p-4 border border-black/10 w-[450px]")}>
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