import React from "react";
import { pressStart2P, instrumentSans } from "@/styles/fonts";
import Label from "./Label";
type Props = {
  heading: string;
  description: string;
  labelEmoji: string;
  labelText: string;
  tools: string[];
};

const PageHeader = ({ heading, description, labelEmoji, labelText, tools }:Props) => {
  return (
    <>
    <div className="lg:w-[200px]"></div>
    <div className="flex flex-col items-center md:block">
      <Label labelEmoji={labelEmoji} headingText={labelText} />
      <h1 className={`${pressStart2P.className} mb-6 text-2xl md:text-4xl uppercase text-center md:text-left`}>
        {heading}
      </h1>
      <p className={`${instrumentSans.className} mb-2`}>
         {description}
      </p>
      <ul className="list-disc pl-6">
        {tools.map((tool, i) => (
          <li key={i}>{tool}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default PageHeader;