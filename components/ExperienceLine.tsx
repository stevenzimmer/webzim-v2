"use client"

import { motion } from 'framer-motion'

export const ExperienceLine = ({scrollY}) => {
  

  return (
    
    <motion.div
    style={{scaleY: scrollY}} className="absolute left-9 top-1 w-[4px] h-full bg-slate-800 origin-top"></motion.div>
    
  )
};
