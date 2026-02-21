'use client'

import React from 'react'
import { UserLock } from 'lucide-react'
import Link from 'next/link'

const SignUpIcon = () => {
  return (
    <Link href="/signup">
      <div className="flex items-center text-white gap-3 group p-4 transition-colors hover:text-faith-orange cursor-pointer">
        <UserLock size={29} />
      </div>
    </Link>
  )
}

export default SignUpIcon