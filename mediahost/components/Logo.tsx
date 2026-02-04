import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

function Logo({className}: {className?: string}) {
  return <Link
  href={'/'}
  className='inline-flex'
   >
    <h2 className={cn(
        "text-2xl text-faith-orange/90 font-black tracking-wider  uppercase hover:text-shop-light-blue hoverEffect group font-poppins ", className
        )}>new  
        <span
        className='text-spirit-indigo group-hover:text-shop-btn-dark-blue hoverEffect'
        > life </span>
        EMBASSY
    </h2>
    
  </Link>
}

export default Logo
