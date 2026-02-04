import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { headerData } from "./constants/data";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/app/hooks";
import FavouriteIcon from "./FavouriteIcon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div ref={sideBarRef} className="min-w-1/2 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light-blue flex flex-col gap-5">
        <div className="text-white flex gap-10 justify-between group-hover:text-white">
          <Logo />
          <button className="hover:text-faith-orange" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`  hover:text-life-green hoverEffect text-orange hoverEffect relative group
          ${pathname === item?.href && "text-life-green"}
          
          `}
            >
              {item?.title}
              <span
                className={`
            absolute bottom-0.5 left-0 w-0 h-0.5 bg-faith-orange group-hover:w-1/2 
            hoverEffect group-hover:left-0 ${pathname === item?.href && "w-1/2"}
            
            `}
              />
              <span
                className={`
            absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-light-blue 
            group-hover:w-1/2 hoverEffect 
            group-hover:right-0
            ${pathname === item?.href && "w-1/2"}
            
            `}
              />
            </Link>
          ))}
         
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
