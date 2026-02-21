import { GraduationCap } from 'lucide-react'
import React from 'react'
import Link from 'next/link'






const FavouriteIcon = () => {
  return (
    <Link href="/school">
      <div className="flex items-center text-white gap-3 group p-4 transition-colors hover:text-faith-orange cursor-pointer">
        <GraduationCap size={29} />
      </div>
    </Link>
  )
}

export default FavouriteIcon