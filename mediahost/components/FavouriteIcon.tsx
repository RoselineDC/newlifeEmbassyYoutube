import { GraduationCap, School } from 'lucide-react'
import React from 'react'

const FavouriteIcon = () => {
  return (
    <div className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect hover:text-life-green hoverEffect relative group' >
      <GraduationCap />
    </div>
  )
}

export default FavouriteIcon