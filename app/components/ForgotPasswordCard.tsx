import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { ArrowLeft, ArrowRight, Eye, EyeOff, LockIcon, MailIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"


interface ChildProps{
    stepCounter: number,
    setStepCounter: (value:number) => void
}


export function ForgotPasswordEmailCard({setStepCounter,stepCounter}:ChildProps){


// onClick={() => {setStepCounter(1)}} 

    return(
        <div className="p-2 border border-black/10 backdrop-blur-[2px] rounded-2xl z-10">
        <Card className="flex justify-between border-none w-[350px]">
            <CardHeader>
                <a className="flex justify-start text-sm w-full">{stepCounter} of 3</a>
                <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
                <CardDescription className="text-black/80">Enter your email to receive a verification code</CardDescription>
            </CardHeader>
            <CardContent>
                <FieldGroup>
                    <Field>
                    <FieldLabel htmlFor="email" className="text-black font-bold">Email</FieldLabel>
                    <InputGroup >
                    <InputGroupInput type="email" placeholder="Enter your email" />
                    <InputGroupAddon>
                        <MailIcon />
                    </InputGroupAddon>
                    </InputGroup>
                    </Field>
                                       <Button onClick={() => {setStepCounter(2)}}  type="submit" className="flex gap-2 rounded-3xl py-6 text-[16px] cursor-pointer">Sign in 
                        <ArrowRight/>
                        </Button>
                </FieldGroup >
            </CardContent >
            <CardFooter>
                <a href="/login" className="flex justify-center w-full cursor-pointer">Back to Login</a>
            </CardFooter>
            </Card>
            </div>
    )
}




export function ForgotPasswordOTPCard({setStepCounter, stepCounter}:ChildProps){

    return(
        <div className="p-2 border border-black/10 backdrop-blur-[2px] rounded-2xl z-10">
        <Card className="flex justify-between border-none w-[350px]">
            <CardHeader>
                <a className="flex justify-start text-sm w-full">{stepCounter} of 3</a>
                <CardTitle className="text-2xl font-bold">Verify Identity</CardTitle>
                <CardDescription className="text-black/80">Enter 6-digit code sent to your email</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <FieldGroup>
                    <Field>
                <InputOTP maxLength={6} defaultValue="">
                    <InputOTPGroup className="flex justify-center items-center w-full gap-4">
                        <InputOTPSlot className="border rounded-md" index={0} />
                        <InputOTPSlot className="border rounded-md"  index={1} />
                        <InputOTPSlot className="border rounded-md"  index={2} />
                        <InputOTPSlot className="border rounded-md"  index={3} />
                        <InputOTPSlot className="border rounded-md"  index={4} />
                        <InputOTPSlot className="border rounded-md"  index={5} />
                    </InputOTPGroup>
                    </InputOTP>
                    </Field>
                </FieldGroup>
                <a className="flex justify-center item-center w-full text-[14px] text-blue-700">Resend otp</a>
                                   <Button onClick={() => {setStepCounter(3)}} type="submit" className="flex gap-2 rounded-3xl py-6 text-[16px] cursor-pointer">Verify OTP
                        <ArrowRight/>
                        </Button>
            </CardContent>
            <CardFooter>
                <a onClick={() => {setStepCounter(1)}} className="flex justify-start items-center gap-2 w-full cursor-pointer"><ArrowLeft size={14}/> Back</a>
            </CardFooter>
            </Card>
            </div>
    )
}


interface ResetChildProps{
    stepCounter: number
}


export function ForgotPasswordResetCard({stepCounter}:ResetChildProps){

    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()

    return(
        <div className="p-2 border border-black/10 backdrop-blur-[2px] rounded-2xl z-10">
        <Card className="flex justify-between border-none w-[350px]">
            <CardHeader>
                <a className="flex justify-start text-sm w-full">{stepCounter} of 3</a>
                <CardTitle className="text-2xl font-bold">Set New Password</CardTitle>
                <CardDescription className="text-black/80">Create a strong password to secure your account</CardDescription>
            </CardHeader>
            <CardContent>
                <FieldGroup>
                     <Field>
                    <FieldLabel className="font-bold" htmlFor="password">Password</FieldLabel>
                    <InputGroup >
                    <InputGroupInput  placeholder="Enter your password" />
                    <InputGroupAddon>
                        <LockIcon />
                    </InputGroupAddon>
                    <InputGroupAddon align={"inline-end"}  onClick={ () => {setShowPassword(prev => !prev)} } className="cursor-pointer" >
                        { showPassword? <EyeOff/> :<Eye />}
                    </InputGroupAddon>
                    </InputGroup>
                    </Field>
                    <Field>
                    <FieldLabel className="font-bold" htmlFor="confirm_Password">Confirm Password</FieldLabel>
                    <InputGroup >
                    <InputGroupInput placeholder="Enter your password" />
                    <InputGroupAddon>
                        <LockIcon />
                    </InputGroupAddon>
                    <InputGroupAddon align={"inline-end"}  onClick={ () => {setShowPassword(prev => !prev)} } className="cursor-pointer" >
                        { showPassword? <EyeOff/> :<Eye />}
                    </InputGroupAddon>
                    </InputGroup>
                    </Field>
                    <Button onClick={() => {router.push("/")}} type="submit" className="flex gap-2 rounded-3xl py-6 text-[16px] cursor-pointer">Reset Password
                            <ArrowRight/>
                        </Button>
                    </FieldGroup>
            </CardContent>
            </Card>
            </div>
    )
}