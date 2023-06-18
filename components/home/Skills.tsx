import { skills } from "@/lib/skills"

export default function Skills() {
  return (
    <div className="mx-auto max-w-[800px]">
       
       <h2 className="text-center text-2xl mb-6">Skills</h2>
        {Object.keys(skills).map((skill, i) => {
          return (
            <div key={i} className="flex items-center mb-12">
              <div className="w-1/4">
                <p className="text-lg md:text-2xl font-bold" >{skill}</p>
              </div>
              <div className="flex flex-wrap w-full">
                {skills[skill].map((item, j) => {
                  return ( 
                    <div key={j}  className="w-auto border rounded bg-slate-100 px-3 py-1 shadow m-1">
                      
                      <p
                      className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display  font-bold  text-transparent drop-shadow-sm text-lg  text-left "
                    
                      >
                        {item}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div> 
          )
        })}
         
        </div>
  )
}
