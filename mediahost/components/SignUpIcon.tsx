'use client'

import React, { useState } from 'react'
import { UserLock } from 'lucide-react'
import SignUpModal from './SignUpModal'
const SignUpIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div
        className="flex items-center text-white gap-3 group p-4 transition-colors hover:text-faith-orange cursor-pointer"
        onClick={openModal}
      >
        <UserLock size={29} />
      </div>

      <SignUpModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}

export default SignUpIcon
