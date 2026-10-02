"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Bell, InboxIcon, Menu, PenLine, Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd"
import { useMemo, useState } from "react";
import { Popover, PopoverHeader, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Separator } from "@/components/ui/separator";
import { BlogCreatedCard, BlogEditedCard, BlogLikedCard, CommentCard } from "./notification-item-cards";
import { useRouter } from "next/navigation";





export default function Navbar() {


    const navigators: Array<{ id: number; name: string }> = [
        { id: 1, name: "Stories" },
        { id: 2, name: "Writes" },
        { id: 3, name: "About" },
        { id: 4, name: "Write" }
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

    const [viewBlur, setViewBlur] = useState(false)

    const filteredBlog = useMemo(() => {
        if (!search.trim()) return []

        return trendingNow.filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])


    const router = useRouter()


    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "100vw",
                padding: "0 24px",
                height: "56px",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid #EAEAEA",
                fontFamily: "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', 'Switzer', sans-serif",
                color: "#2F3437",
                boxSizing: "border-box",
            }}
        >
            {/* Left section: Logo + Search */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Logo */}
                <button
                    onClick={() => { router.push("/") }}
                    style={{
                        fontFamily: "'Newsreader', 'Playfair Display', 'Instrument Serif', serif",
                        fontWeight: 600,
                        fontSize: "22px",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        color: "#111111",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                        transition: "opacity 200ms ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7" }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
                >
                    BlogNest
                </button>

                {/* Search trigger */}
                <Dialog>
                    <DialogTrigger>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "6px 12px",
                                borderRadius: "8px",
                                backgroundColor: "#F7F6F3",
                                border: "1px solid #EAEAEA",
                                cursor: "pointer",
                                transition: "background-color 200ms ease, box-shadow 200ms ease",
                                minWidth: "180px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#F0EFEC"
                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#F7F6F3"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            <Search size={15} strokeWidth={1.5} style={{ color: "#787774" }} />
                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#787774",
                                    fontFamily: "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', sans-serif",
                                    letterSpacing: "0.01em",
                                }}
                                className="hidden md:inline"
                            >
                                Search articles...
                            </span>
                            <kbd
                                style={{
                                    marginLeft: "auto",
                                    fontFamily: "'Geist Mono', 'SF Mono', 'JetBrains Mono', monospace",
                                    fontSize: "11px",
                                    color: "#787774",
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #EAEAEA",
                                    borderRadius: "4px",
                                    padding: "1px 5px",
                                    lineHeight: 1.4,
                                }}
                                className="hidden md:inline-block"
                            >
                                /
                            </kbd>
                        </div>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false} >
                        <div className="flex flex-col justify-start items-start gap-4 h-[200px] overflow-scroll hide-scrollbar">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    backgroundColor: "#F7F6F3",
                                    border: "1px solid #EAEAEA",
                                    width: "100%",
                                }}
                            >
                                <Search strokeWidth={1.5} size={16} style={{ color: "#787774" }} />
                                <input
                                    placeholder="Search articles..."
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                    style={{
                                        outline: "none",
                                        width: "100%",
                                        background: "transparent",
                                        border: "none",
                                        fontSize: "14px",
                                        color: "#2F3437",
                                        fontFamily: "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', sans-serif",
                                    }}
                                />
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
                                        <h3
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: 500,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em",
                                                color: "#787774",
                                                paddingBottom: "8px",
                                            }}
                                        >
                                            Recent Search
                                        </h3>

                                        {recentSearch.map((blog) => (
                                            <Button onMouseEnter={() => setActiveCard(blog)} key={blog.id} variant={"ghost"} className="flex justify-start md:w-[350px] truncate">
                                                {blog.title}
                                            </Button>
                                        ))}
                                    </div>

                                    <div className="flex flex-col justify-start items-start md:w-full">
                                        <h3
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: 500,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em",
                                                color: "#787774",
                                                paddingBottom: "8px",
                                            }}
                                        >
                                            Trending Now
                                        </h3>

                                        {trendingNow.map((blog) => (
                                            <Button onMouseEnter={() => setActiveCard(blog)} key={blog.id} variant={"ghost"} className="flex justify-start md:w-[350px] truncate">{blog.title}</Button>
                                        ))}
                                    </div>
                                </div>)}
                        </div>
                        <DialogFooter style={{ padding: "8px 0 0", borderTop: "1px solid #EAEAEA" }}>
                            <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "8px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", borderRight: "1px solid #EAEAEA", paddingRight: "12px" }}>
                                    <kbd
                                        style={{
                                            fontFamily: "'Geist Mono', 'SF Mono', 'JetBrains Mono', monospace",
                                            fontSize: "11px",
                                            backgroundColor: "#F7F6F3",
                                            border: "1px solid #EAEAEA",
                                            borderRadius: "4px",
                                            padding: "1px 6px",
                                            color: "#2F3437",
                                        }}
                                    >
                                        Enter
                                    </kbd>
                                    <span style={{ fontSize: "12px", color: "#787774" }}>Go to page</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#787774" }}>
                                    <Avatar className="w-5 h-5">
                                        <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                                            alt="Profile Picture"
                                            className="rounded-full" />
                                        <AvatarFallback>AP</AvatarFallback>
                                    </Avatar>
                                    <span>{activeCard.author}</span>
                                    <span style={{ color: "#EAEAEA" }}>|</span>
                                    <span>{activeCard.date}</span>
                                </div>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Right section: Write + Bell + Avatar */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {/* Write button — solid #111, 4-6px radius, no shadow */}
                <button
                    onClick={() => router.push("/create")}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 16px",
                        backgroundColor: "#111111",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 500,
                        fontFamily: "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', sans-serif",
                        cursor: "pointer",
                        transition: "background-color 200ms ease, transform 150ms ease",
                        letterSpacing: "0.01em",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#333333" }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#111111" }}
                    onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)" }}
                    onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)" }}
                >
                    <PenLine size={14} strokeWidth={1.8} />
                    <span>Write</span>
                </button>

                {/* Notification bell */}
                <Popover>
                    <PopoverTrigger onClick={() => { setViewBlur(prev => !prev) }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "34px",
                                height: "34px",
                                borderRadius: "8px",
                                border: "1px solid transparent",
                                cursor: "pointer",
                                transition: "background-color 200ms ease, border-color 200ms ease",
                                color: "#2F3437",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#F7F6F3"
                                e.currentTarget.style.borderColor = "#EAEAEA"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent"
                                e.currentTarget.style.borderColor = "transparent"
                            }}
                        >
                            <Bell size={18} strokeWidth={1.5} />
                        </div>
                        {viewBlur && <div className="fixed inset-0 isolate z-50 bg-black/10 backdrop-blur-xs  w-screen h-screen pointer-events-none"></div>}
                    </PopoverTrigger>
                    <PopoverContent
                        style={{
                            width: "380px",
                            outline: "none",
                            padding: "0",
                            borderRadius: "12px",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                            margin: "8px 16px",
                            zIndex: 100,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0",
                                maxHeight: "420px",
                                overflowY: "auto",
                            }}
                            className="hide-scrollbar"
                        >
                            {/* Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "16px 20px 12px",
                                    borderBottom: "1px solid #EAEAEA",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: "#111111",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Notifications
                                </h1>
                                <button
                                    style={{
                                        fontSize: "12px",
                                        color: "#1F6C9F",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        fontFamily: "'SF Pro Display', 'Geist Sans', 'Helvetica Neue', sans-serif",
                                        transition: "opacity 200ms ease",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7" }}
                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
                                >
                                    Mark all as read
                                </button>
                            </div>

                            {/* Tabs */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "16px",
                                    padding: "0 20px",
                                    borderBottom: "1px solid #EAEAEA",
                                }}
                            >
                                <button
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "#111111",
                                        background: "none",
                                        border: "none",
                                        borderBottom: "1.5px solid #111111",
                                        padding: "10px 0 8px",
                                        cursor: "pointer",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Inbox
                                </button>
                                <button
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "#787774",
                                        background: "none",
                                        border: "none",
                                        borderBottom: "1.5px solid transparent",
                                        padding: "10px 0 8px",
                                        cursor: "pointer",
                                        letterSpacing: "0.02em",
                                        transition: "color 200ms ease",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2F3437" }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "#787774" }}
                                >
                                    Unread
                                </button>
                            </div>

                            {/* Notification groups */}
                            <div style={{ padding: "12px 20px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <h2
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: "#787774",
                                        }}
                                    >
                                        Today
                                    </h2>
                                    <BlogLikedCard />
                                    <BlogCreatedCard />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <h2
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: "#787774",
                                        }}
                                    >
                                        Yesterday
                                    </h2>
                                    <CommentCard />
                                    <BlogEditedCard />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <h2
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: "#787774",
                                        }}
                                    >
                                        Past 7 days
                                    </h2>
                                    <BlogCreatedCard />
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                {/* Avatar */}
                <button
                    onClick={() => { router.push("/login") }}
                    style={{
                        padding: 0,
                        background: "none",
                        border: "2px solid transparent",
                        borderRadius: "50%",
                        cursor: "pointer",
                        transition: "border-color 200ms ease",
                        lineHeight: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#EAEAEA" }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent" }}
                >
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={"https://devwithalok.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero1.d3a1a1c3.jpg&w=128&q=75"}
                            alt="Profile Picture"
                            className="rounded-full" />
                        <AvatarFallback
                            style={{
                                fontFamily: "'SF Pro Display', 'Geist Sans', sans-serif",
                                fontSize: "12px",
                                fontWeight: 500,
                                backgroundColor: "#F7F6F3",
                                color: "#2F3437",
                            }}
                        >
                            AP
                        </AvatarFallback>
                    </Avatar>
                </button>
            </div>
        </nav>
    )
}