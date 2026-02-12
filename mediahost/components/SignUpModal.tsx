'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

import Link from 'next/link'
import React, { useState } from 'react'
import { X } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    // Add your sign-up logic here
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 bg-cover bg-center bg-no-repeat mt-75 px-10"
      onClick={onClose}
    >
      <div
        className="bg-[#000000b3] rounded-sm py-12 px-16 font-bold text-[2rem] text-white flex flex-col gap-5 z-50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Sign Up</h1>
        <Input 
          type="text" 
          placeholder="Full Name" 
          required 
          className="py-4 px-2" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          type="tel" 
          placeholder="Phone Number" 
          required 
          className="py-4 px-2" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          required 
          className="py-4 px-2" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="password" 
          required 
          className="py-4 px-2" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button 
          className="bg-faith-orange text-black px-2 mt-5 hover:bg-faith-orange/50 cursor-pointer w-full text-base py-2.5" 
          onClick={handleSignIn}
        >
          Sign Up
        </Button>
        <button
          className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-faith-orange"
          onClick={onClose}
        >
          <X />
        </button>
        <p className='text-base text-bg-card text-center'>OR</p>
        <div className='flex items-center justify-center gap-4'>
          <FcGoogle className='cursor-pointer w-10 h-10 hover:text-faith-orange' />
          <IoLogoApple className='cursor-pointer w-10 h-10 hover:text-faith-orange' />
        </div>
        <div>
          <span className='text-base text-bg-card font-normal'> Already Have an account? </span>
          <Link href="/login" className='font-medium text-base text-faith-orange/70 hover:text-life-green'>
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal