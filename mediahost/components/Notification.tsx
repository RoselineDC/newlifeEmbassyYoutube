import Link from 'next/link'
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div>
        <Link href="/school">
      <div className="flex items-center text-white gap-3 group transition-colors hover:text-faith-orange cursor-pointer">
        <IoIosNotificationsOutline size={29} />
      </div>
    </Link>

    </div>
  )
}

export default Notification