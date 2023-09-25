import Image from "next/image";
import { FcGraduationCap } from "react-icons/fc";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import intropic from "../../../public/intropicture.png"

const IntroSlider = () => {
  return (
    <div className="bg-base-200 h-fit w-full">
      <div className="w-11/12 text-center md:text-left mx-auto h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center py-10 font-Inter gap-5 ">
        <div className="space-y-3 order-2 md:order-1">
          <div className="flex justify-center md:justify-start gap-3 items-center font-Mooli tracking-tighter">
            <FcGraduationCap className="text-2xl" />
            <h6>Welcome</h6>
          </div>
          <h1 className="md:text-4xl text-2xl font-bold">
            Mohaiminur Rahman Mukta
          </h1>
          <h2 className="font-Raleway">MERN Stack Website Developer</h2>
          <div className="flex justify-center flex-wrap md:justify-start items-center gap-2">
            <PrimaryButton link="/">Say Hello</PrimaryButton>
            <SecondaryButton link="/">Contact with me</SecondaryButton>
          </div>
        </div>
        <Image className="w-fit h-auto mx-auto order-1 md:order-2" width={300} height={300} src={intropic} />
      </div>
    </div>
  );
};

export default IntroSlider;
