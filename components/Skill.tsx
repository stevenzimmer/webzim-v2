"use client"
import { motion } from "framer-motion"


type SkillProps = {
  name: string,
  x: string,
  y: string
}
export default function Skill({name, x, y}:SkillProps) {
  return (
    <motion.div 
    initial={{x: 0, y: 0}}
    whileInView={{x: x, y: y}}
    transition={{duration: 1}}
    viewport={{once: true}}
    className="flex items-center justify-center rounded-full font-semibold bg-slate-800 text-slate-50 shadow px-6 py-2 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer absolute ">{name}</motion.div>
  )
}
