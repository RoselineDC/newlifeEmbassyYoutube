"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserLock } from "lucide-react";

export default function ProfileDropdown() {
  const { data: session } = useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // NOT LOGGED IN
  if (!user) {
    return (
      <Link href="/signup">
        <div className="flex items-center text-white gap-3 p-4 hover:text-faith-orange transition-colors cursor-pointer">
          <UserLock size={29} />
        </div>
      </Link>
    );
  }

  // LOGGED IN
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar / Initials */}
      <button
        onClick={() => setOpen(!open)}
        className="focus:outline-none"
      >
        {user.image ? (
          <img
            src={user.image}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border border-faith-orange"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-faith-orange flex items-center justify-center text-white font-semibold">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
      </button>

      {/* Dropdown */}
      
    
    </div>
  );
}