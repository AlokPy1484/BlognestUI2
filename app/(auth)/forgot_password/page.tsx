'use client'

import { ForgotPasswordEmailCard, ForgotPasswordOTPCard, ForgotPasswordResetCard } from "@/app/components/ForgotPasswordCard";
import { useState } from "react";






export default function ForgotPassword(){

    const [stepCounter, setStepCounter] = useState(1)

    return(
         <div className="flex justify-center items-center w-full h-screen">

            {stepCounter == 1 && <ForgotPasswordEmailCard stepCounter={stepCounter} setStepCounter={setStepCounter}/>}
             {stepCounter == 2 && <ForgotPasswordOTPCard stepCounter={stepCounter} setStepCounter={setStepCounter}/>}
              {stepCounter == 3 && <ForgotPasswordResetCard stepCounter={stepCounter} />}
         </div>

    )
}