"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"


export default function AnimatedNumbers({value}) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 9,
    stiffness: 90,
    duration: 3000
  })

  const isInView = useInView(ref, {
    once: true,
  });

useEffect(() => {
  if(isInView) {
    motionValue.set(value)
  }
}, [isInView, motionValue, value]);

useEffect(() => {
  springValue.on("change", (latest) => {
    // motionValue.set(Math.floor(latest))
    // console.log({latest});
    if(ref.current && latest.toFixed(0) <= value) {
      ref.current.textContent = latest.toFixed(0)
    }

  })
}, [springValue, value]);
        
    
  return (
    <span ref={ref} className="text-5xl font-bold">{value}</span>
  )
}
