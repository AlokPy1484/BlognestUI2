import LoginCard from "@/app/components/LogInCard";
import { FlickeringGrid } from "@/components/ui/flickering-grid";






export default function LoginPage(){


    return(

        <div className="flex justify-center items-center w-full h-screen pb-20">

            <FlickeringGrid
                className="absolute inset-0 z-0 size-full"
                squareSize={2}
                gridGap={4}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />

            <LoginCard/>

        </div>
    )
}