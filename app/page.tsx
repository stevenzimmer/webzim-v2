import AnimatedText from "@/components/AnimatedText";
import ProfilePic from "@/components/ProfilePic";
import Skills from "@/components/home/Skills";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  
  return (
   <> 
  
    <div className="container p-12">
      <div className="flex justify-between">
        <div className="lg:w-1/2">
          <ProfilePic />
        </div>
        <div className="lg:w-1/2">
          <AnimatedText>Hi, I'm Steven Zimmer</AnimatedText>
          <p className="my-4 prose prose-xl">Military vet turned full-stack engineer specializing in growth marketing, web strategy, and CMS Platforms.</p>
        
          <Link target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vSUEvNzoC29tv-GCEXxvvM8JxJvgsGV9F8rIRQXvp57whp0jMqnCAoFnAUQBYe-fwgTHTt5SNmPWQNT/pub" className={buttonVariants({ variant: "secondary" })}>Resume</Link>

          <Link href="mailto:steven@webzim.dev" className={buttonVariants()}>Contact me</Link>
        </div>
      </div>
      <div>
        
      </div>
      {/* <h1 className="text-center my-6">
          Steven Zimmer
        </h1> */}
      {/* <Skills /> */}
    </div>
    </>
  )
}
