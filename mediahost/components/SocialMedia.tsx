import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, MessageCircleCode, Youtube } from "lucide-react"

import { TooltipProvider } from "./ui/tooltip"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

interface Props {
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

const socialLink = [
  {
    id: "youtube",
    title: "YouTube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    id: "facebook",
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    id: "instagram",
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    href: "https://www.whatsapp.com/",
    icon: <MessageCircleCode className="w-5 h-5" />,
  },
]

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5 py-10", className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className={cn(
                  "p-2 border rounded-full hover:bg-life-green border-life-green hoverEffect hover:text-white",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent
              className={cn(
                "bg-white text-spirit-indigo font-semibold border border-life-green rounded-2xl w-17.5 text-center text-sm",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia