"use client";

import { Poppins, Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
import { Quote } from "@/types";

export default function Quote(randomQuote: Quote) {
  const router = useRouter();
  const [fade, setFade] = useState(false);
  return (
    <section className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setFade(true);

            setTimeout(() => {
              router.refresh();
            }, 500);

            setTimeout(() => {
            setFade(false);
              
            }, 700);
          }}
        >
          Refresh Quote
        </button>

        <p className={`text-2xl text-center mt-4 ${poppins.className}`}>{randomQuote.author}</p>
        <p className={`text-2xl text-center mt-4 ${poppins.className}`}>{randomQuote.category}</p>
      </div>
      <div className="grow mt-24">
         <p className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}>
         {randomQuote.quote}
         </p>
      </div>
    </section>
  )
}
