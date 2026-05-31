"use client"



import { FlickeringGrid } from "@/components/ui/flickering-grid";




export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  // const [openSidebar, setOpenSidebar] = useState(true)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setOpenSidebar(window.innerWidth >= 1205)
  //   }

  //   handleResize()

  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // },[])


  // const [openWebSidebar, setOpenWebSidebar] = useState(true)

  // useEffect(() => {
  //     const handleResize = () => {
  //       setOpenWebSidebar(window.innerWidth >= 950)}


  //       handleResize()
  //       window.addEventListener("resize" , handleResize)

  //       return () => {
  //         window.removeEventListener("resize", handleResize)
  //       }
        
      
  // },[])



  return (
        <div className="flex justify-center items-center w-full h-screen">

            <FlickeringGrid
                className="absolute inset-0 z-0 size-full"
                squareSize={2}
                gridGap={4}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />

            {children}

        </div>

  );
}
