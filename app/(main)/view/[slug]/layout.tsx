import Navbar from "@/components/main/navbar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Children } from "react";




export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html
            lang="en"
            className=" h-full antialiased ">
            <body className="min-h-full flex flex-col">
                <div className="flex flex-row justify-start items-center z-10">
                </div>
                <div className="flex ">
                    {children}
                    {/* <WebSidebar open={openWebSidebar}/> */}
                </div>
            </body>
        </html>
    )
}