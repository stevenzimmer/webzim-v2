"use client";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  children: string;
  className?: string;
}

const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
}

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1
    }
  }
}


export default function AnimatedText({children, className = ""}:AnimatedTextProps) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1 
      variants={quote}
      initial="initial"
      animate="animate"
      className={`inline-block w-full text-slate-800 font-bold text-5xl ${className}`}>{children.split(" ").map((word, i) => {
        return (
          <motion.span 
          variants={singleWord}
           key={word + "-" + i}>
            {word}&nbsp;
          </motion.span>
        )
      })}</motion.h1>
    </div>
  )
}
