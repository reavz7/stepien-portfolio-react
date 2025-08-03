import memojiSmile from "../assets/images/memoji smile.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import Staricon from "../assets/icons/star.svg";
import SparkleIcon from "../assets/icons/sparkle.svg"
import { HeroOrbit } from "../components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>  
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      <HeroOrbit size={800} rotation={-72}>
        <Image
          src={Staricon}
          alt="A star icon floating in the background"
          className="size-28"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(55%) sepia(74%) saturate(577%) hue-rotate(101deg) brightness(103%) contrast(103%)",
          }}
        />
      </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
        <Image
          src={Staricon}
          alt="A star icon floating in the background"
          className="size-12"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(55%) sepia(74%) saturate(577%) hue-rotate(101deg) brightness(103%) contrast(103%)",
          }}
        />
      </HeroOrbit>
       <HeroOrbit size={590} rotation={98}>
        <Image
          src={Staricon}
          alt="A star icon floating in the background"
          className="size-12"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(55%) sepia(74%) saturate(577%) hue-rotate(101deg) brightness(103%) contrast(103%)",
          }}
        />
      </HeroOrbit>
      <div className="container mx-auto">
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
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 mb-4 tracking-wide">
            Building Exceptional User Expierences
          </h1>
          <p className="text-center text-white/60 md:text-lg">
            I am a frontend developer that loves what he is doing :). Let's
            talk!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-2xl">
            <span className="font-semibold">Explore My Work</span>
            <Image
              src={ArrowDown}
              alt="arrow down"
              className="size-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-2xl">
            <span>👋</span>
            <span className="font-semibold">Let's talk</span>
          </button>
        </div>
      </div>
    </div>
  );
};
