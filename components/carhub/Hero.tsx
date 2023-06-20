"use client"
import Image from "next/image"
import CustomButton from "./CustomButton"



export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 600,
      behavior: "smooth"
    })
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortlestt booking process.
        </p>
        <CustomButton 
          title="Explore Cars"
          containerStyles="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md  mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/carhub/hero.png"
            alt="Carhub hero"
            fill
            className="object-contain"
          /></div>
          
          <div className="hero__image-overlay" />
        
      </div>
    </div>
  )
}
