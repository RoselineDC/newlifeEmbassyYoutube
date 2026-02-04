
import Link from "next/link";
import { Laptop } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const PHONE_NUMBER = "27745663399";

const MESSAGE = encodeURIComponent(
  "Hello, May YOU KINDLIE HELP ME WITH SOFTWARE DEVELOPMENT SERVICES."


);

export default function WhatsAppButton() {
  return (
    <TooltipProvider>
        <Tooltip>

        <TooltipTrigger asChild>
    <Link
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      
      className={`  fixed bottom-12 right-12 z-50 bg-linear-to-r from-spirit-indigo to-life-green text-white p-2 rounded-full shadow-lg hover:scale-105 transition`}
      aria-label="WhatsApp Support"
    >
        <span className="absolute hidden group-hover:block">
    Developer
  </span>
      <Laptop size={25} />
    </Link>
    </TooltipTrigger>
    <TooltipContent side="top" className="bg-white text-spirit-indigo font-semibold border border-life-green rounded-2xl w-20 text-center text-sm">
        Developer
      </TooltipContent> 
    </Tooltip>
    </TooltipProvider>
  );
}