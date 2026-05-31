import Image from "next/image";
import PeopleCard, { PeopleCardFeed } from "./PeopleCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { string } from "zod";

export default function BlogFeedCardSmall(){


    return(
        <div className="flex justify-between items-center gap-4">
            <Image src="https://plus.unsplash.com/premium_photo-1727558768347-eefa5276de9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="thumbnail" width={150} height={100}
             className="rounded-sm"/>
            <div className="flex flex-col justify-center items-start gap-2">
                <a className="font-bold text-sm">Beginner's Guide to Prompt engineering.</a>
                <a className="text-zinc-600 text-xs">Most people do #1 within 10 minutes of waking </a>
                <div className="flex justify-start items-center gap-2">
                    <Avatar size="sm">
                    <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                        alt="Profile Picture"
                        className="rounded-full"/>
                    <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <a className="text-zinc-600 text-[12px]">John Lee</a>
                </div>
            </div>

        </div>
    )
}



interface BlogCardContent {
    author: string,
    description: string,
    blogTitle: string,
    blogDescription: string,
    imageLink: string

}



export function BlogFeedCard(props:BlogCardContent){



    return(
        <div className="flex flex-col justify-start items-start gap-2 ">
        <PeopleCardFeed username={props.author} description={props.description}/>  
        <div className="flex justify-between items-center gap-8">
            <div className="flex flex-col justify-center items-start gap-2">
                <a className="font-bold md:text-2xl text-sm line-clamp-2">{props.blogTitle}</a>
                <a className="text-zinc-600 text-[12px] md:text-md line-clamp-2">{props.blogDescription}</a>
            </div>
            <Image src={props.imageLink}
             alt="thumbnail" width={150} height={100}
             className="rounded-sm w-20 md:w-50"/>
             
        </div>
        </div>
    )
}