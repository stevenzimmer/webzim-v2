"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ExperienceIcon } from "./ExperienceIcon"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { type } from "os";

type ExperienceDetailsProps = {
  exp: {
    title: string;
    company: string;
    dates: string;
    location: string;
    description: string;
  }
}
export default function ExperienceDetails({exp}:ExperienceDetailsProps) {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["center end", "center start"]
  });
  return (
    <div ref={ref}>
      <ExperienceIcon scrollY={scrollYProgress} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring",delay: 0.2 }}
      >
        <Card className="mb-12 lg:w-2/3 mx-auto">
          <CardHeader>
            <CardTitle>{exp.title}, <span className="text-primary">{exp.company}</span></CardTitle>
            <CardDescription>{exp.dates} | {exp.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{exp.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
