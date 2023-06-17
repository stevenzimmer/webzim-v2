"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { sourceCodePro } from "@/styles/fonts";
import HamburgerMenu from "@/components/langchain/HamburgerMenu";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 bg-gray-50 text-gray-800 w-full p-4 grid grid-cols-3 items-center">
      <Link href="/langchain" className={`text-center`}>
       Langchain Demos
      </Link>
      {isClient && <HamburgerMenu />}{" "}
      {/* Render HamburgerMenu component on the client side */}
      <Link href="/" className={`text-center`}>Back to WebZim Home 🏡</Link>
      
    </nav>
  );
};

export default Navbar;