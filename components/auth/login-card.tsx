"use client"

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
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"


import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"



import { ArrowBigRight, ArrowBigRightDash, ArrowRight, Eye, EyeClosed, EyeOff, Loader, LockIcon, MailIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


// type FormField = {
//     email: string,
//     password: string
// }



const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

type FormField = z.infer<typeof schema>



export default function LoginCard() {

    // const formSchema = z.object({
    //     email: z.email(),
    //     password: z.string().min(8, "Password must be atlest 8 charecter")
    // })

    // const {register, handleSubmit} = useForm()

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormField>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormField> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
    }


    // const onSubmit:SubmitHandler<typeof formSchema> = (data) => {
    //     console.log(data)
    // }

    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()



    return (
        <div className="p-2 border border-black/10 backdrop-blur-[2px] rounded-2xl z-10">
            <Card className="flex justify-between border-none">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription className="text-black/80">Enter your credential to access your account</CardDescription>
                </CardHeader>
                <CardContent className="">

                    <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email" className="text-black font-bold">Email</FieldLabel>
                                <InputGroup >
                                    <InputGroupInput {...register("email")} type="email" placeholder="Enter your email" />
                                    <InputGroupAddon>
                                        <MailIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                                {errors && <a className="text-sm text-red-700">{errors.email?.message}</a>}
                            </Field>
                            <Field>
                                <FieldLabel className="font-bold" htmlFor="password">Password</FieldLabel>
                                <InputGroup >
                                    <InputGroupInput {...register("password")} type={cn(showPassword ? "text" : "password")} placeholder="Enter your password" />
                                    <InputGroupAddon>
                                        <LockIcon />
                                    </InputGroupAddon>
                                    <InputGroupAddon align={"inline-end"} onClick={() => { setShowPassword(prev => !prev) }} className="cursor-pointer" >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </InputGroupAddon>
                                </InputGroup>
                                {errors && <a className="text-sm text-red-700">{errors.password?.message}</a>}
                                <FieldDescription onClick={() => { router.push("/forgot_password") }} className="flex justify-end w-full text-sm cursor-pointer">Forgot password?</FieldDescription>
                            </Field>
                            <Button type="submit" className="flex gap-2 rounded-3xl py-6 text-[16px]">Sign in
                                {isSubmitting ? <Loader className="animate-spin" /> : <ArrowRight />}
                            </Button>
                        </FieldGroup>
                    </form>


                    <div className="flex flex-col justify-center items-center py-4 gap-2">
                        <Separator className="mt-4" />
                        <a className="relative top-[-16] text-xs font-extralight text-black/50 z-10 bg-white px-2">OR CONTINUE WITH</a>
                        <div className="flex justify-between items-center w-full">
                            <Button className="flex gap-2 px-12 py-5 rounded-4xl">
                                <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiA+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTQzLjYxMSAyMC4wODNINDJWMjBIMjR2OGgxMS4zMDNjLTEuNjQ5IDQuNjU3LTYuMDggOC0xMS4zMDMgOGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnM1LjM3My0xMiAxMi0xMmMzLjA1OSAwIDUuODQyIDEuMTU0IDcuOTYxIDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0NiA2LjA1MyAyOS4yNjggNCAyNCA0QzEyLjk1NSA0IDQgMTIuOTU1IDQgMjRzOC45NTUgMjAgMjAgMjBzMjAtOC45NTUgMjAtMjBjMC0xLjM0MS0uMTM4LTIuNjUtLjM4OS0zLjkxNyIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Im02LjMwNiAxNC42OTFsNi41NzEgNC44MTlDMTQuNjU1IDE1LjEwOCAxOC45NjEgMTIgMjQgMTJjMy4wNTkgMCA1Ljg0MiAxLjE1NCA3Ljk2MSAzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYgNi4wNTMgMjkuMjY4IDQgMjQgNEMxNi4zMTggNCA5LjY1NiA4LjMzNyA2LjMwNiAxNC42OTEiLz48cGF0aCBmaWxsPSIjNENBRjUwIiBkPSJNMjQgNDRjNS4xNjYgMCA5Ljg2LTEuOTc3IDEzLjQwOS01LjE5MmwtNi4xOS01LjIzOEExMS45IDExLjkgMCAwIDEgMjQgMzZjLTUuMjAyIDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiA1LjAyNUM5LjUwNSAzOS41NTYgMTYuMjI3IDQ0IDI0IDQ0Ii8+PHBhdGggZmlsbD0iIzE5NzZEMiIgZD0iTTQzLjYxMSAyMC4wODNINDJWMjBIMjR2OGgxMS4zMDNhMTIuMDQgMTIuMDQgMCAwIDEtNC4wODcgNS41NzFsLjAwMy0uMDAybDYuMTkgNS4yMzhDMzYuOTcxIDM5LjIwNSA0NCAzNCA0NCAyNGMwLTEuMzQxLS4xMzgtMi42NS0uMzg5LTMuOTE3Ii8+PC9zdmc+"
                                    alt="google logo"
                                    width={18}
                                    height={18} />
                                Google</Button>
                            <Button className="flex gap-2 px-12 py-5 rounded-4xl">
                                <Image src="https://img.icons8.com/ios11/200/FFFFFF/github.png"
                                    alt="google logo"
                                    width={18}
                                    height={18} />
                                Github</Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="flex gap-1 justify-center items-center w-full ">Don't have an accont? <a href="/signup">Sign up</a></p>
                </CardFooter>
            </Card>
        </div>
    )
}