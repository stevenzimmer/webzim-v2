"use client";
import Link from "next/link";
// import Router from "next/router";
import { usePathname } from "next/navigation";
type NavLinkProps = {
  href: string;
  children: string;
  className?: string;
};
export default function NavLink ({href, children, className}:NavLinkProps) {

  const pathname = usePathname();
  console.log({pathname});
  return (
        <Link href={href} className={`${className} group relative text-white`}>{children}
        <span className={`h-[2px] inline-block bg-slate-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-200 ${pathname === href ? "w-full" : "w-0"}`}>&nbsp;</span></Link>
  )
};