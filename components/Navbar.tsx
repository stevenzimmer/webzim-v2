import Link from "next/link"
import {FaGithub, FaLinkedin, FaLaptop } from "react-icons/fa";
import Logo from "./Logo";
import NavLink from "./NavLink";



export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="container mx-auto flex justify-between flex-col sm:flex-row items-center">
      

        <div className="flex items-center justify-between gap-5">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
        <Logo />
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-5 text-white text-2xl">
         
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