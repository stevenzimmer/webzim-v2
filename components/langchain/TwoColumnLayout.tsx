type Props = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

const TwoColumnLayout = ({ leftChildren, rightChildren }:Props) => (
  <div className="flex flex-col justify-between  md:flex-row md:justify-between  py-20 -mx-6">
    {/* Description */}
    <div className="md:w-2/5 w-full px-6 py-12 md:py-20">{leftChildren}</div>
    {/* Chat */}
    <div className="md:w-3/5 w-full  px-6">{rightChildren}</div>
  </div>
);

export default TwoColumnLayout;