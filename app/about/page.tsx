import AnimatedNumbers from "@/components/AnimatedNumbers"
import AnimatedText from "@/components/AnimatedText"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container p-12">
       
      <div className="flex items-stretch mb-12">
        <div className="lg:w-4/12">
          <AnimatedText>About Me</AnimatedText>
          <p className="my-4 prose prose-xl">Military vet turned full-stack engineer specializing in growth marketing, web strategy, and CMS Platforms.</p>
        </div>
        <div className="lg:w-4/12 ">
          <div className="relative h-full rounded-2xl border-2 border-solid bg-slate-50 border-slate-800">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-slate-800">
              <Image alt="Steven Zimmer Profile pic" src="/images/sz-profile-pic.jpg" width={500} height={500} className=" h-full rounded-2xl relative z-10" />
            </div>
          </div>
        </div>
        <div className="lg:w-4/12 px-6">
          <div className="py-6">
          <AnimatedNumbers value={232} />

          </div>
          <div className="py-6">


          <AnimatedNumbers value={51} />
          </div>
          <div className="py-6">
          <AnimatedNumbers value={625} />
          </div>

        </div>
      </div>
      <Skills />
      <Experience />
      {/* <div className="h-[400px]"></div> */}
     
      
    </div>
  )
}
