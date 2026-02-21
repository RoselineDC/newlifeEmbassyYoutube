'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'

const SignUpPage = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState<string | undefined>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();



  const handleLogin = async () => {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/"
      });

      if (!response?.ok) {
        toast.error(response?.error || "Failed to login.")
        return;
      }

      router.push(response.url || "/");
    } catch (error) {
      toast.error("Failed to login.")
    }
  };

  const handleSignUp = async () => {
    if (!name || !phone || !email || !password) {
      toast.error("Please fill in all fields")
      return
    }
    if (!phone || !isValidPhoneNumber(phone)) {
  toast.error("Please enter a valid phone number")
  return
}


    try {
      await axios.post("/api/register", {
        name,
        phone,
        email,
        password
      })

      await handleLogin();
    } catch (error) {
      toast.error("Unable to create account.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 opacity-95"
    //  style={{ backgroundImage: "url('/images/logo.jpg')" }}

    >
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

        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex h-12 w-full rounded-md border border-faith-orange bg-transparent px-3 py-2 text-base shadow-sm transition-colors focus-within:ring-1 focus-within:ring-faith-orange">
  <PhoneInput
    international
    defaultCountry="ZA"
    value={phone}
    onChange={setPhone}
    className="w-full  text-white outline-none"
  />
</div>

       

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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <p className="text-center text-sm text-gray-400">OR</p>

        <div className="flex items-center justify-center gap-6">
          <FcGoogle className="w-8 h-8 cursor-pointer" />
          <IoLogoApple className="w-8 h-8 cursor-pointer" />
        </div>

        <div className="text-center text-sm">
          <span className="text-gray-400">Already have an account? </span>
          <Link
            href="/login"
            className="text-faith-orange hover:text-life-green font-medium"
          >
            Log In
          </Link>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage