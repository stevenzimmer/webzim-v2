import React from "react";
import { pressStart2P, instrumentSans } from "@/styles/fonts";

type Props = {
  heading: string;
  boldText: string;
  description: string;
};

const PageHeader = ({ heading, boldText, description }:Props) => {
  return (
    <>
      <h1 className={`${pressStart2P.className} mb-10 text-6xl uppercase`}>
        {heading}
      </h1>
      <p className={`${instrumentSans.className} mb-10`}>
        <strong>{boldText}</strong> {description}
      </p>{" "}
    </>
  );
};

export default PageHeader;