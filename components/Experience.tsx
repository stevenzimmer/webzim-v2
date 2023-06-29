"use client";
import { experience } from "@/lib/experience"
import { useRef } from "react";

import ExperienceDetails from "./ExperienceDetails";
import {ExperienceLine} from "./ExperienceLine";
import { useScroll } from "framer-motion";

export default function Experience() {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <>
      <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>
      
      <div ref={ref} className="relative">
        <ExperienceLine scrollY={scrollYProgress} />
        {experience.map((exp, i) => (
          <div key={i}>
            <ExperienceDetails exp={exp} />
          </div>
        ))}
      </div>

    </>
  )
}
