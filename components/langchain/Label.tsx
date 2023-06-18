import React from "react";
type Props = {
  labelEmoji: string;
  headingText: string;
};
const Label = ({ labelEmoji, headingText }:Props) => {
  return (
    <div className="mb-6 flex items-center">
      <p className="text-center text-2xl">{labelEmoji}</p>
      <p className="text-center uppercase text-2xl px-3" >{headingText}</p>
    </div>
  );
};

export default Label;