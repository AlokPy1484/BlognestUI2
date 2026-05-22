import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";




interface PeoplesType {
    username: string,
    description: string
}

export default function PeopleCard(props:PeoplesType){



    return(
        <div className="flex justify-between items-center px-1 w-full hover:bg-zinc-100 rounded-md">
            <div className="flex justify-center items-center gap-2">
            <Avatar>
            <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                alt="Profile Picture"
                className="rounded-full"/>
            <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-start ">
                <a className="font-bold text-[16px]">{props.username}</a>
                <a className="">{props.description}</a>
            </div>
            </div>
            {/* <Button variant={"outline"}>Follow</Button> */}

            </div>

    )
}


export function PeopleCardFeed(props){

    return(
        <div className="flex justify-between items-center px-1 hover:bg-zinc-100 rounded-md">
            <div className="flex justify-center items-center gap-2">
            <Avatar>
            <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                alt="Profile Picture"
                className="rounded-full"/>
            <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-start ">
                <div className="flex justify-start items-center gap-2 text-[12px]"><a className="font-bold">{props.username}</a>
                 <a className="font-bold">.</a>
                 <a className="text-black/60">Apr 16,2022</a>
                 </div>
                <a className="text-xs text-black/60">{props.description}</a>
            </div>
            </div>
            {/* <Button variant={"outline"}>Follow</Button> */}

            </div>

    )
}