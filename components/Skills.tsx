import Skill from "./Skill"



export default function Skills() {
  return (
    <div className="mb-12">
      <h2 className="text-center text-5xl font-bold mb-12">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <div className=" flex items-center justify-center rounded-full font-semibold bg-slate-800 text-slate-50 shadow px-6 py-3 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer ">
          Web
        </div>
        <Skill name="React" x={"-5vw"} y={"10vw"} />
        <Skill name="CSS" x={"1vw"} y={"3vw"} />
        <Skill name="HTML" x={"-1vw"} y={"-4vw"} />
        <Skill name="JavaScript" x={"-6vw"} y={"-1vw"} />

        </div>
    </div>
  )
}
