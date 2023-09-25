import Image from "next/image";
import { FcGraduationCap } from "react-icons/fc";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const IntroSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 font-Inter">
      <div className="space-y-3">
        <div className="flex justify-start gap-3 items-center font-Mooli tracking-tighter">
          <FcGraduationCap className="text-2xl" />
          <h6>Welcome</h6>
        </div>
        <h1 className="md:text-4xl text-2xl font-bold">
          Mohaiminur Rahman Mukta
        </h1>
        <h2 className="font-Raleway">MERN Stack Website Developer</h2>
        <div className="flex justify-start items-center gap-2">
          <PrimaryButton link="/">Say Hello</PrimaryButton>
          <SecondaryButton link="/">Contact with me</SecondaryButton>
        </div>
      </div>
      <Image width={500} height={600} src="/public/intropicture.png" />
    </div>
  );
};

export default IntroSlider;
