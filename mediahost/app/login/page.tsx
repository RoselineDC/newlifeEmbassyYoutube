'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields")
      return
    }

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profile"
      });

      if (!response?.ok) {
        toast.error("Invalid email or password.")
        console.log(response?.error)
        return;
      }

      router.push(response.url || "/profile");
    } catch (error) {
      toast.error("Failed to login.")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 opacity-95">
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="w-full max-w-md bg-black/90 p-10 rounded-md text-white flex flex-col gap-5 relative">

        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-white hover:text-faith-orange transition"
        >
          <X size={22} />
        </button>

        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className="bg-faith-orange text-black hover:bg-faith-orange/70 w-full"
          onClick={handleLogin}
        >
          Log In
        </Button>

        <p className="text-center text-sm text-gray-400">OR</p>

        <div className="flex items-center justify-center gap-4">
          <FcGoogle className="w-8 h-8 cursor-pointer" onClick={() => signIn("google", { callbackUrl: "/profile" })} />
          <FaGithub className="w-8 h-8 cursor-pointer"  onClick={() => signIn("github", { callbackUrl: "/profile" })}/>
        </div>

        <div className="text-center text-sm">
          <span className="text-gray-400">Don’t have an account? </span>
          <Link
            href="/signup"
            className="text-faith-orange hover:text-life-green font-medium"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage