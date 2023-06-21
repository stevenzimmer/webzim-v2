"use client";

import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils/carhub";
import CarDetails from "./CarDetails";
import { CarProps } from "@/types";


interface CarCardProps {
  car: CarProps;
}


const CarCard = ({car}:CarCardProps) => {
  const { city_mpg, year, make, model, fuel_type, transmission, drive, cylinders, displacement, highway_mpg, combination_mpg } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
        <p className="flex mt-6 text[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">
            $
          </span>
          {carRent}
          <span className="self-end text-[14px] font-medium">
            /day
          </span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image src="/images/carhub/hero.png" fill className="object-contain" alt="car model" priority />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/carhub/steering-wheel.svg" width={20} height={20} alt="fuel" />
              <p className="text-[14px]">
                {transmission === "a" ? "automatic" : "manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/carhub/tire.svg" width={20} height={20} alt="fuel" />
              <p className="text-[14px]">
                {drive.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/carhub/gas.svg" width={20} height={20} alt="MPG" />
              <p className="text-[14px]">
                {city_mpg} MPG
              </p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] leading-[17px]"
            rightIcon="/images/carhub/right-arrow.svg"
            handleClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}  />
    </div>
  )
}

export default CarCard