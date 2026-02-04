import React from 'react'
import { Title } from './ui/Test'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/public/index'

const HomeBanner = () => {
  return (
    <div className='bg py-16 md:3xl md:py-0 rounded-lg px-10 lg:px-24  flex items-center justify-between tracking-wide mb-5'>
        <div>
            <Title >
                NEW LIFE EMBASSY<br />
                A LIGHT TO THE NATIONS
            </Title>
            <Link href={"/shop"} className='bg-shop-btn-dark-blue text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-blue hoverEffect'>
                Watch Now
            </Link>


        </div>
        <div>
            <Image
               src={banner_1}
               alt="banner image"   
               className='hidden md:inline-flex w-full'
            />
        </div>
    </div>
  )
}

export default HomeBanner