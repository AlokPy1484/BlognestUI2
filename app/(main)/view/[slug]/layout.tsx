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
                <div className="flex ">
                    {children}
                </div>
            </body>
        </html>
    )
}