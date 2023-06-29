"use client"

import { motion } from "framer-motion"

export const ExperienceIcon = ({scrollY}) => {

 
  return (
    <figure className="absolute left-0 stroke-dark mx-auto">
      <svg width={75} height={75} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx={75} cy={50} r={20} className="stroke-primary stroke-1 fill-none" />
        <motion.circle cx={75} cy={50} r={20} className="stroke-[5px] fill-slate-50" style={{
          pathLength: scrollY
        }} />
        <circle cx={75} cy={50} r={10} className="stroke-primary stroke-1 animate-pulse fill-primary" />


      </svg>
    </figure>
  )
};
