import Link from "next/link"
import {FaGithub, FaLinkedin, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/" className="text-white/90 no-underline hover:text-white" >Steven Zimmer</Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-5 text-white text-2xl">
          <Link href="/langchain">Langchain</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#" className="text-white/90 hover:text-white">
            <FaLinkedin />
          </Link>
          <Link href="#" className="text-white/90 hover:text-white">
            <FaGithub />
          </Link>
          <Link href="#" className="text-white/90 hover:text-white">
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  )
}