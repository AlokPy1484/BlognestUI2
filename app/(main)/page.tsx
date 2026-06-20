"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogFeedCard } from "../../components/main/blog-cards";
import { useState } from "react";



export default function Feed() {


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
        },
        {
            id: 4,
            author: "Emily Watson",
            date: "Jul 21,2022",
            description: "Passionate creator and Design Manager",
            blogTitle: "6 Creative Thinking Methods That Will Make You A Better Product Designer",
            blogDescription: "If your first thought after looking at the article title was Can creativity really improve design work? then, yes, we asked ourselves the same thing too, now that we are thinking alike, let's continue reading ahead. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777958337331-4631084d67a5?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            author: "David Johnson",
            date: "Aug 03,2022",
            description: "Curious builder and Systems Engineer",
            blogTitle: "8 Productivity Habits That Will Make You A Stronger UX Researcher",
            blogDescription: "If the first question that appeared in your mind while reading this title was How can habits affect design quality? then, yes, we had that same reaction too, now that we are aligned, let's move forward together. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777895868494-4e01af8487b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            author: "Sophia Turner",
            date: "Sep 11,2022",
            description: "Focused learner and Platform Architect",
            blogTitle: "7 Behavioral Design Concepts That Will Help You Build Better Applications",
            blogDescription: "If the first thing that came to your mind while reading this article title was What does behavior have to do with products? then, yes, we wondered the same thing too, now that we share that thought, let's continue reading. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1773332611522-06b86b48cbf1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            author: "Ryan Matthews",
            date: "Oct 17,2022",
            description: "Talented mentor and Technical Advisor",
            blogTitle: "8 Research Driven Strategies That Will Improve Your Product Design Process",
            blogDescription: "If the first idea that entered your thoughts after reading this title was How can strategy improve product work? then, yes, we asked ourselves that exact question too, now that we have common ground, let's continue here. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777653224543-eb1f8a586865?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            author: "Olivia Parker",
            date: "Nov 05,2022",
            description: "Helpful expert and UX Consultant",
            blogTitle: "9 User Experience Methods That Will Make You A Better Design Thinker",
            blogDescription: "If the first reaction you had while reading the title was Why does experience matter in design? then, yes, we had a very similar thought too, now that we are asking the same questions, let's keep moving forward. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1779449607169-6dcd8c8fed12?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            author: "Daniel Roberts",
            date: "Dec 12,2022",
            description: "Dedicated creator and Product Specialist",
            blogTitle: "7 Design Thinking Approaches That Will Improve Your Creative Problem Solving",
            blogDescription: "If the first thing that came across your mind after reading this title was How can thinking improve creativity? then, yes, we thought exactly the same too, now that we have reached this point together, let's continue reading. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1779083552552-e17e83296ecd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 10,
            author: "Jessica Morgan",
            date: "Jan 19,2023",
            description: "Skilled planner and Technology Analyst",
            blogTitle: "8 Human Centered Design Techniques That Will Make You A Better Researcher",
            blogDescription: "If the first thought that entered your mind after reading the title was How can people influence product design? then, yes, we had the same thought too, now that we're sharing ideas already, let's continue this article here. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1778808351776-a47c03331bf3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]




    const BlogFeaturedListing = [
        {
            id: 6,
            author: "Sophia Turner",
            date: "Sep 11,2022",
            description: "Focused learner and Platform Architect",
            blogTitle: "7 Behavioral Design Concepts That Will Help You Build Better Applications",
            blogDescription: "If the first thing that came to your mind while reading this article title was What does behavior have to do with products? then, yes, we wondered the same thing too, now that we share that thought, let's continue reading. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1773332611522-06b86b48cbf1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            author: "Michael Carter",
            date: "Jun 14,2022",
            description: "Smart leader and Software Consultant",
            blogTitle: "9 Interface Design Principles That Will Help You Create Better Experiences",
            blogDescription: "If the first thing that crossed your mind after reading the title was Why do interfaces matter so much? then, yes, that was our exact thought too, now that we agree on something, let's continue this discussion here. Cheers!",
            imageLink: "https://plus.unsplash.com/premium_photo-1777558740424-013f500e7199?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            author: "Daniel Roberts",
            date: "Dec 12,2022",
            description: "Dedicated creator and Product Specialist",
            blogTitle: "7 Design Thinking Approaches That Will Improve Your Creative Problem Solving",
            blogDescription: "If the first thing that came across your mind after reading this title was How can thinking improve creativity? then, yes, we thought exactly the same too, now that we have reached this point together, let's continue reading. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1779083552552-e17e83296ecd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
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
            id: 8,
            author: "Olivia Parker",
            date: "Nov 05,2022",
            description: "Helpful expert and UX Consultant",
            blogTitle: "9 User Experience Methods That Will Make You A Better Design Thinker",
            blogDescription: "If the first reaction you had while reading the title was Why does experience matter in design? then, yes, we had a very similar thought too, now that we are asking the same questions, let's keep moving forward. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1779449607169-6dcd8c8fed12?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            author: "Emily Watson",
            date: "Jul 21,2022",
            description: "Passionate creator and Design Manager",
            blogTitle: "6 Creative Thinking Methods That Will Make You A Better Product Designer",
            blogDescription: "If your first thought after looking at the article title was Can creativity really improve design work? then, yes, we asked ourselves the same thing too, now that we are thinking alike, let's continue reading ahead. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777958337331-4631084d67a5?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 10,
            author: "Jessica Morgan",
            date: "Jan 19,2023",
            description: "Skilled planner and Technology Analyst",
            blogTitle: "8 Human Centered Design Techniques That Will Make You A Better Researcher",
            blogDescription: "If the first thought that entered your mind after reading the title was How can people influence product design? then, yes, we had the same thought too, now that we're sharing ideas already, let's continue this article here. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1778808351776-a47c03331bf3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            id: 7,
            author: "Ryan Matthews",
            date: "Oct 17,2022",
            description: "Talented mentor and Technical Advisor",
            blogTitle: "8 Research Driven Strategies That Will Improve Your Product Design Process",
            blogDescription: "If the first idea that entered your thoughts after reading this title was How can strategy improve product work? then, yes, we asked ourselves that exact question too, now that we have common ground, let's continue here. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777653224543-eb1f8a586865?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            author: "David Johnson",
            date: "Aug 03,2022",
            description: "Curious builder and Systems Engineer",
            blogTitle: "8 Productivity Habits That Will Make You A Stronger UX Researcher",
            blogDescription: "If the first question that appeared in your mind while reading this title was How can habits affect design quality? then, yes, we had that same reaction too, now that we are aligned, let's move forward together. Cheers!",
            imageLink: "https://images.unsplash.com/photo-1777895868494-4e01af8487b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];


    const [activeView, setActiveView] = useState(0)


    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-start gap-4 mx-4 md:mx-8 w-full max-w-3xl h-full">
                <div className="flex justify-start items-center gap-4">
                    <Button onClick={() => setActiveView(0)} variant={activeView === 0 ? "outline" : "ghost"}>For you</Button>
                    <Button onClick={() => setActiveView(1)} variant={activeView === 1 ? "outline" : "ghost"} >Featured</Button>
                </div>
                <Separator />
                <div className="flex flex-col justify-start items-center gap-8">
                    {activeView === 0 ? BlogListing.map((blog) => (
                        <BlogFeedCard author={blog.author} description={blog.description} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} imageLink={blog.imageLink} />
                    )) :
                        BlogFeaturedListing.map((blog) => (
                            <BlogFeedCard author={blog.author} description={blog.description} blogTitle={blog.blogTitle} blogDescription={blog.blogDescription} imageLink={blog.imageLink} />
                        ))}

                </div>
            </div>
        </div>
    )
}