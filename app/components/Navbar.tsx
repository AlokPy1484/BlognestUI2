import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, 
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter, } from "@/components/ui/dialog";
import { Bell, Menu, PenLine, Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd"
import { useMemo, useState } from "react";



export default function Navbar(){


    const navigators : Array<{id: number; name: string}> = [
        {id: 1 , name: "Stories"},
        {id: 2 , name: "Writes"},
        {id: 3, name: "About"},
        {id: 4, name: "Write"}      
    ]

    const recentSearch = [
  {
    id: 1,
    title: "How To Build Scalable Modern SaaS Applications Using Next.js",
    author: "Jack Daniel",
    date: "May 12, 2026",
    authorBio: "System Architect"
  },
  {
    id: 2,
    title: "Complete Guide To Designing Responsive User Interfaces For Web",
    author: "Emma Watson",
    date: "Apr 28, 2026",
    authorBio: "UI/UX Designer"
  },
  {
    id: 3,
    title: "Understanding Advanced State Management Patterns In React Applications",
    author: "David Miller",
    date: "Mar 17, 2026",
    authorBio: "Frontend Engineer"
  }]

  const trendingNow = [
  {
    id: 1,
    title: "How Modern SaaS Companies Build Scalable User Interface Design Systems",
    author: "Ryan Holloway",
    date: "May 12, 2026",
    authorBio: "Cloud Infrastructure Specialist"
  },
  {
    id: 2,
    title: "A Complete Guide to Optimizing Next.js Applications for Better Performance",
    author: "Sophia Bennett",
    date: "Apr 28, 2026",
    authorBio: "Product Experience Designer"
  },
  {
    id: 3,
    title: "Understanding Advanced React Component Patterns for Enterprise Level Web Applications",
    author: "Nathan Reeves",
    date: "Mar 17, 2026",
    authorBio: "Software Solutions Engineer"
  },
  {
    id: 4,
    title: "How To Build Scalable Modern SaaS Applications Using Next.js",
    author: "Aiden Mercer",
    date: "May 12, 2026",
    authorBio: "Technical Systems Analyst"
  },
  {
    id: 5,
    title: "Complete Guide To Designing Responsive User Interfaces For Web",
    author: "Olivia Hartley",
    date: "Apr 28, 2026",
    authorBio: "Creative Interface Strategist"
  },
  {
    id: 6,
    title: "Understanding Advanced State Management Patterns In React Applications",
    author: "Lucas Sterling",
    date: "Mar 17, 2026",
    authorBio: "Application Performance Engineer"
  }
]

const [activeCard, setActiveCard] = useState(recentSearch[0])

const [search, setSearch] = useState("")

const filteredBlog = useMemo(() => {
  if (!search.trim()) return []

  return trendingNow.filter((blog) => 
    blog.title.toLowerCase().includes(search.toLowerCase())
  )

},[search])


    return(
        <div className="flex justify-between items-center px-2 w-full py-4 bg-white text-black ">
            <div className="flex justify-between items-center gap-4">
                 <button className="font-serif font-semibold text-2xl">BlogNest</button>
                 <Dialog>
                    <DialogTrigger>
                <div className="flex justify-center gap-4 p-1 items-center rounded-2xl bg-zinc-100">
                    <Search strokeWidth={1}/>
                    <input placeholder="Search" className="outline-none w-25 md:w-full" />
                 </div>
                 </DialogTrigger>
                 <DialogContent showCloseButton={false} >
                    <div className="flex flex-col justify-start items-start gap-4 h-[200px] overflow-scroll hide-scrollbar">
                        <div className="flex justify-start gap-2 p-1 items-center rounded-md bg-zinc-100 w-full">
                        <Search strokeWidth={2} size={20} className="text-zinc-600"/>
                        <input placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} className="outline-none w-full" />
                        </div>

                        {filteredBlog.length > 0 ?
                        (<div>
                                                      {filteredBlog.map((blog) => (
                                <Button onMouseEnter={() => setActiveCard(blog)} key={blog.id} variant={"ghost"} className="flex justify-start md:w-[350px] truncate">{blog.title}</Button>
                            ))}
                        </div>) 
                        : 
                        (<div>
                        <div className="flex flex-col justify-start items-start md:w-full">
                            <h3 className="text-xs text-black/70 pb-2">Recent Search</h3>

                            {recentSearch.map((blog) => (
                                <Button onMouseEnter={() => setActiveCard(blog)} key={blog.id} variant={"ghost"} className="flex justify-start md:w-[350px] truncate">
                                  {blog.title}
                                </Button>
                            ))}
                        </div>

                        <div className="flex flex-col justify-start items-start md:w-full">
                            <h3 className="text-xs text-black/70 pb-2">Trending Now</h3>

                            {trendingNow.map((blog) => (
                                <Button onMouseEnter={() => setActiveCard(blog)} key={blog.id} variant={"ghost"} className="flex justify-start md:w-[350px] truncate">{blog.title}</Button>
                            ))}
                        </div>
                      </div>)}
                    </div>
                <DialogFooter className="p-2">
                    <div className="flex justify-start items-center w-full">
                    <div className="flex justify-start items-center gap-2 border-r border-black/20 pr-2">
                              <Kbd className="font-sans border border-black/10">⏎</Kbd>
                              <a className="text-black/60">Go to page</a>
                    </div>
                    <div className="flex justify-start items-center gap-1 px-2 text-black/60">
                <Avatar className="w-6 h-6">
                <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                alt="Profile Picture"
                className="rounded-full"/>
                <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                <a>{activeCard.author}</a>
                <a>.</a>
                <a>{activeCard.date}</a>
                    </div>
                    </div>
                    </DialogFooter>
                </DialogContent>
                 </Dialog>
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