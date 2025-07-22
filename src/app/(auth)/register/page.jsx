"use client";



import { registerUser } from "@/action/api/register";
import { storageUserInfo } from "@/action/auth.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const res = await registerUser(form);
            if (res?.access_token) {
                storageUserInfo(res.access_token);
                toast.success(res?.message)
            }

            if(res.success === false){
                toast.error(res?.message)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Register</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="name" className="py-2">Name</Label>
                        <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div>
                        <Label htmlFor="email" className="py-2">Email</Label>
                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                    </div>
                    <div>
                        <Label htmlFor="password" className="py-2">Password</Label>
                        <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="bg-[#016630] hover:bg-[#016630] text-white w-full" onClick={handleRegister}>
                        Register
                    </Button>
                </CardFooter>
                <p className="text-sm py-2 px-5">
                    If you already have an account, please{" "}
                    <Link className="text-blue-500 font-semibold" href="/login">Login</Link>
                </p>
            </Card>
        </div>
    );
}
