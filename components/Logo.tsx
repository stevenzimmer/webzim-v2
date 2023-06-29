"use client"
import Link from "next/link"
import {motion} from "framer-motion";

const MotionLink = motion(Link);
export default function Logo() {
  return (
    <div className="flex items-center justify-center">
          <MotionLink 
            whileHover={{backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],transition: {duration: 1, repeat: Infinity}}} 
            href="/" className="text-white/90 no-underline hover:text-white text-3xl font-bold text-white place-content-center mb-2 md:mb-0 w-16 h-16 bg-slate-800 rounded-full text-light flex items-center justify-center" >
            SZ
          </MotionLink>
        </div>
  )
}
