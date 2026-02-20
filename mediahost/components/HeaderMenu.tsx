'use client'

import React from 'react'
import { headerData } from './constants/data'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * A component that renders the header menu
 * 
 * @returns {JSX.Element} The header menu component
 */
function HeaderMenu() {
  const pathname = usePathname();
  
  return (
    <div 
    className='hidden md:inline-flex w-fit items-center justify-between gap-15 text-m capitalized text-white font-normal'
    >
      {headerData?.map((item) => (
        <Link key={item?.title}
        href={item?.href}
        className= {`
          hover:text-life-green hoverEffect relative group
          ${pathname === item?.href  && "text-faith-orange"}
          
          `}
        >
          {item?.title}
          <span 
           className={`
            absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-soft group-hover:w-1/2 
            hoverEffect group-hover:left-0 ${
              pathname === item?.href && "w-1/2"
            }
            
            `}
          />
          <span
          className={`
            absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-soft
            group-hover:w-1/2 hoverEffect 
            group-hover:right-0
            ${pathname === item?.href  && "w-1/2"}
            
            `}
          />

        
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
