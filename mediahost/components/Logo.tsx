import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

function Logo({className}: {className?: string}) {
  return <Link
  href={'/'}
  className='inline-flex  '
   >
    <h2 className={cn(
        "text-xl   text-faith-orange/90 font-black tracking-wider hover:text-life-green hoverEffect group uppercase  font-poppins   ", className
        )}>new  
        <span
        className='text-white hover:text-life-green hoverEffect group hoverEffect'
        > life </span>
        EMBASSY
    </h2>
    
  </Link>
}

export default Logo
