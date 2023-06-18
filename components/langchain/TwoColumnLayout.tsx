type Props = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

const TwoColumnLayout = ({ leftChildren, rightChildren }:Props) => (
  <div className="flex flex-wrap justify-between md:justify-end md:py-20 ">
    {/* Description */}
    <div className="lg:w-1/3 w-full py-12 md:py-20 md:flex xl:block md:justify-center lg:justify-end">{leftChildren}</div>
    {/* Chat */}
    <div className="lg:w-3/5 w-full  md:px-6">{rightChildren}</div>
  </div>
);

export default TwoColumnLayout;