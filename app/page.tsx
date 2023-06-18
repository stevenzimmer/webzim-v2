
import ProfilePic from "@/components/ProfilePic";
import Skills from "@/components/home/skills";

export default function Home() {
  
  return (
   <> 
  
    <div className="container p-12">
      <ProfilePic />
      <h1 className="text-center my-6">
          Steven Zimmer
        </h1>
      <Skills />
    </div>
    </>
  )
}
