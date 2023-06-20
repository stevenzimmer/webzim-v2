"use client";
import Image from "next/image"
import { CustomButtonProps } from "@/types";

export default function CustomButton({title, containerStyles, handleClick, btnType}:CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={` border border-transparent text-base font-medium custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>{title}</span>
      
    </button>    
  )
}
