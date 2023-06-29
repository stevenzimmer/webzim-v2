import AnimatedText from "@/components/AnimatedText"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="container p-12">
      <AnimatedText>Recent Projects</AnimatedText>
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-12">
          <FeaturedProject title="featured Project" type="type" item="item" link="#" summary="summary" img="/images/sz-profile-pic.jpg" github={"#"} />
        </div>
        <div className="col-span-6">
          project 1
        </div>

        <div className="col-span-6">
          project 2
        </div>

        <div className="col-span-12">
          Featured
        </div>
        <div className="col-span-6">
          project 1
        </div>

        <div className="col-span-6">
          project 2
        </div>
      </div>
    </div>
  )
}


const FeaturedProject = ({type, title, item, summary, img, link, github}) => (

    <article className="">
      <Link href={link} target="_blank">
        <Image width={100} height={100}  src={img} alt={title} />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
         <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <Link href={github} target="_blank">
         Github Icon
        </Link>
        <Link href={link} target="_blank">
         See projecct
        </Link>
      </div>
    </article>

)
