import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { BookCheck, FilePenLine } from "lucide-react";
import Image from "next/image";


// const SystemNotification = [
//     {   name: "Blog Created",
//         icon: <BookCheck className="p-1 bg-indigo-500 rounded-[4px]" size={30}/>,
//         message: "blog has been published successfully"},
//     {   name: "Blog Edited",
//         icon: <FilePenLine className="p-1 bg-indigo-500 rounded-[4px]" size={30}/>,
//         message: "blog has been updated successfully"
//     }
// ]

export function BlogCreatedCard() {

    return (
        <div className="flex justify-start items-start gap-4 w-full">
            <BookCheck className="p-1 bg-indigo-500/40 rounded-[4px]" size={30} />
            <div className="flex flex-col justify-start items-start w-full">
                <div className="text-[12px] md:text-[16px]">
                    <a className="font-semibold">"Introdunction to Prompt engineering"</a>
                    <a className="font-light">blog has been published successfully</a>
                </div>
                <a className="text-xs md:text-sm text-black/60">32 min ago</a>
            </div>
        </div>
    )
}

export function BlogEditedCard() {

    return (
        <div className="flex justify-start items-start gap-4 w-full">
            <FilePenLine className="p-1 bg-teal-500/40 rounded-[4px]" size={30} />
            <div className="flex flex-col justify-start items-start w-full">
                <div className="text-[12px] md:text-[16px]">
                    <a className="font-semibold">"Introdunction to Prompt engineering"</a>
                    <a className="font-light">blog has been published successfully</a>
                </div>
                <a className="text-xs md:text-sm text-black/60">32 min ago</a>
            </div>
        </div>
    )
}



export function CommentCard() {

    return (
        <div className="flex justify-start items-start gap-4 w-full">
            <Avatar>
                <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                    alt="Profile Picture"
                    className="rounded-full" />
                <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-start items-start w-full gap-1">
                <div className="text-[12px] md:text-[16px]">
                    <a className="font-semibold px-1">Keven Heart</a>
                    <a className="font-light">has comment on your post</a>
                </div>
                <div className="border border-black/10 p-2 rounded-md text-[12px] md:text-sm font-medium line-clamp-2 leading-loose">
                    So, I dont totally agree with your views but still I am glad that someone it taking initiatives to bring such under shadowed topic back in to public.
                </div>
                <a className="text-xs md:text-sm text-black/60">32 min ago</a>
            </div>
        </div>
    )
}



export function BlogLikedCard() {

    return (
        <div className="flex justify-start items-start gap-4 w-full">
            <AvatarGroup className="relative right-2">
                <Avatar className="relative bottom-1 left-1" size="sm">
                    <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                        alt="Profile Picture"
                        className="rounded-full" />
                    <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <Avatar className="relative top-1  bg-transparent" size="sm">
                    <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                        alt="Profile Picture"
                        className="rounded-full" />
                    <AvatarFallback>AP</AvatarFallback>
                </Avatar>
            </AvatarGroup>
            <div className="flex flex-col justify-start items-start w-full gap-1">
                <div className="text-[12px] md:text-[16px]">
                    <a className="font-semibold px-1">Keven Heart, bruce_wyne34_</a>
                    <a className="font-light">and 4 others have liked your post.</a>
                </div>
                <div className="flex justify-start border border-black/10 p-2 rounded-md text-[12px] md:text-sm gap-4 font-semibold">
                    <Image src="https://images.unsplash.com/photo-1779029314445-b20031dfd4e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="thumbnail"
                        className="rounded-sm"
                        width={60}
                        height={100} />
                    <a>How to prevent burnout in era of AI slop</a>
                </div>
                <a className="text-xs md:text-sm text-black/60">32 min ago</a>
            </div>
        </div>
    )
}



