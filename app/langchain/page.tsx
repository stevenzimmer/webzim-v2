import { langchainDemos } from '@/lib/langchain-demos'
import Image from 'next/image'
import Link from 'next/link'


export default function LangchainHome() {
  return (
    <>
      <div className='text-center container py-20'>
      <h1 className="text-3xl md:text-6xl font-bold  mb-6">
        WebZim Langchain Demos
      </h1>
      <div className='flex flex-wrap'>

      
      {langchainDemos.map((demo) => (
        <div key={demo.path} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 mb-12 group'>
          <Link href={`/langchain/${demo.path}`} >
            <div className="mx-auto rounded-xl overflow-hidden h-40 w-full drop-shadow group-hover:drop-shadow-md mb-3">
              <div className="absolute inset-0">
                <Image
                  src={`/assets/images/langchain/${demo.img}`}
                  alt={demo.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className="text-2xl font-bold" >
              {demo.name}
            </p>
          </Link>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}
