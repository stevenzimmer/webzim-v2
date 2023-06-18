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
      <Label labelEmoji={labelEmoji} headingText={labelText} />
      <h1 className={`${pressStart2P.className} mb-6 text-4xl uppercase`}>
        {heading}
      </h1>
      <p className={`${instrumentSans.className} mb-2`}>
         {description}
      </p>
      <ul className="list-disc pl-6">
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </>
  );
};

export default PageHeader;