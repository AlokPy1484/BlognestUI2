import { Button } from "@/components/ui/button";
import Image from "next/image";
import notebook from "../../public/notebook.png"
import {motion} from "motion/react"


export default function SubscriptionBanner(){



    return(
        <div className="relative flex justify-center items-center gap-4 p-4 bg-zinc-100 rounded-xl">
            <motion.div 

            initial={{
                opacity: 0,
                backdropFilter: "blur(0px)"
            }}

            whileHover={{
                opacity: 100,
                backdropFilter: "blur(4px)"
            }}
            
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-2xl">
                Coming soon...
            </motion.div>
            <div className="flex flex-col justify-center items-start gap-2">
                <a className="font-bold text-[16px]">Get access to everything with primium plans</a>
                <a className="text-zinc-600 text-[12px]">Plans starting at less then $1/week</a>
                {/* <div className="flex justify-center w-full"> */}
                    <Button variant={"outline"} className="bg-zinc-300">Get unlimited access</Button>
                    {/* </div> */}
            </div>
            <Image src={notebook} alt="notebook" width={50}/>

        </div>
    )
}