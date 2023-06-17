import React from "react";
type Props = {
  emoji: string;
  headingText: string;
};
const Title = ({ emoji, headingText }:Props) => {
  return (
    <>
      <p className="text-center mb-4 text-2xl">{emoji}</p>
      <p className="text-center mb-8 uppercase text-3xl" >{headingText}</p>
    </>
  );
};

export default Title;