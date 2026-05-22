import { Button } from "@/components/ui/button";
import Image from "next/image";
import notebook from "../../public/notebook.png"


export default function SubscriptionBanner(){



    return(
        <div className="flex justify-center items-center gap-4 p-4 bg-zinc-100 rounded-xl">
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