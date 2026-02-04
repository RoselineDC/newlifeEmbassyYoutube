"use client";

import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
   <SignInButton mode="modal">
     <button 
    className="text-sm font-semibold text-lightColor hover:cursor-pointer hover:text-shop-dark-blue hoverEffect">
      Sign In
    </button>
   </SignInButton>
  )
}

export default SignIn