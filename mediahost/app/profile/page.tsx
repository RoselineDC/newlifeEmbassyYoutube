"use client";

import React from 'react'
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const {data} = useSession();
  return (
    <div> 
      <h1>Profile Page</h1>
      <p>Hello, {data?.user?.name || "Guest"}!</p>
    </div>
  )
}

export default ProfilePage