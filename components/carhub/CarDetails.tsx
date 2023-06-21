"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetails = ({isOpen, closeModal, car}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className={`relative z-10`} onClose={closeModal}>
<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
  <div className="fixed inset-0 bg-black bg-opacity-25">

  </div>
</Transition.Child>
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-full flex items-center justify-center p-4 text-center">
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <Dialog.Panel className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5`}>
            <button className="absolute top-2 right-2 z-10 bg-primary-blue-100 rounded-full" type="button" onClick={closeModal}>
              <Image src="/images/carhub/close.svg" width={20} height={20} alt="close" className="object-contain" />
            </button>
            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image src="/images/carhub/hero.png" fill className="object-contain" priority alt="car model" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                <Image src="/images/carhub/hero.png" fill className="object-contain" priority alt="car model" /></div> 
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                <Image src="/images/carhub/hero.png" fill className="object-contain" priority alt="car model" /></div> 
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                <Image src="/images/carhub/hero.png" fill className="object-contain" priority alt="car model" />
                </div> 
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-semibold capitalize">{car.make} {car.model}</h2>
              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value], i) => {
                  if (key === "make" || key === "model") return null;
                  return (
                    <div  key={i} className="flex justify-between text-right  gap-5 w-full" >
                      <span className="text-sm text-gray-400 capitalize">{key.split("_").join(" ")}</span>
                      <span className="text-sm font-semibold">{value}</span>
                    </div>
                  )})}
              
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
    </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails