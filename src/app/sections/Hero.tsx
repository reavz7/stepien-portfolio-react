import memojiSmile from "../assets/images/memoji smile.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiSmile}
            alt="Person smiling"
            className="w-22 h-auto"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-md">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 mb-4 tracking-wide">Building Exceptional User Expierences</h1>
        <p className="text-center text-white/60">
          I am a frontend developer that loves what he is doing :). Let's talk!
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-2xl">
            <span className="font-semibold">Explore My Work</span>  
            <Image
              src={ArrowDown}
              alt="arrow down"
              className="size-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button >
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-2xl">
            <span>👋</span>
            <span className="font-semibold">Let's talk</span>
          </button>
        </div>
      </div>
    </div>
  );
};
