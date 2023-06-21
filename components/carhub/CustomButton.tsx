"use client";
import Image from "next/image"
import { CustomButtonProps } from "@/types";

export default function CustomButton({title, containerStyles, handleClick, btnType, textStyles, isDisabled, rightIcon}:CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={` border border-transparent text-base font-medium custom-btn ${containerStyles} ${textStyles}}`}
      onClick={handleClick}
    
    >
      <span className={`flex-1 `}>{title}</span>
      {rightIcon && (
        <span className="flex flex-shrink-0 ml-2">
          <Image src={rightIcon} width={20} height={20} alt="right arrow" className="object-contain" />
        </span>
      )}

    </button>    
  )
}
