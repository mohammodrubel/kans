"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { loginUser } from "@/action/api/login";
import { storageUserInfo } from "@/action/auth.service";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      if (res?.access_token) {
        storageUserInfo(res?.access_token);
        toast.success(res?.message);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else if (res?.success === false) {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="py-2">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <Label className="py-2">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-[#016630] cursor-pointer hover:bg-[#016630] text-white w-full"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
        <b className="text-sm px-5">
          If you have no account please{" "}
          <Link className="text-blue-500" href="/register">
            <b>Register</b>
          </Link>
        </b>
      </Card>
      <Toaster reachColor position="top-right" />
    </div>
  );
}
