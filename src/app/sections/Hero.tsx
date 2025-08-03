import memojiSmile from "../assets/images/memoji smile.png";
import Image from "next/image";
import grainImage from "../assets/images/grain.jpg";
import { HeroOrbit } from "../components/HeroOrbit";
// Import Twoich nowych komponentów
import StarIcon  from "../components/icons/StarIcon";
import  SparkleIcon  from "../components/icons/SparkleIcon";
import  ArrowDownIcon  from "../components/icons/ArrowDownIcon";

export const HeroSection = () => {  
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_10%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>  
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      
      <HeroOrbit size={715} rotation={-72}>
        <StarIcon className="size-28 text-emerald-400/90" />
      </HeroOrbit>
      
      <HeroOrbit size={230} rotation={198}>
        <StarIcon className="size-12 text-emerald-400/90" /> 
      </HeroOrbit>
      
      <HeroOrbit size={720} rotation={128}>
        <StarIcon className="size-12 text-emerald-400/90" />
      </HeroOrbit>
      
      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-12 text-gray-500/50" />
      </HeroOrbit>
      
      <HeroOrbit size={490} rotation={76}>
        <SparkleIcon className="size-8 text-gray-500/50" />
      </HeroOrbit>
      
      <HeroOrbit size={654} rotation={178}>
        <SparkleIcon className="size-10 text-gray-500/50" />
      </HeroOrbit>

      <HeroOrbit size={710} rotation={14}>
        <SparkleIcon className="size-10 text-gray-500/50" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={92}>
        <div className="size-3 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>  
  <HeroOrbit size={520} rotation={-41}>
        <div className="size-3 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>  
        <HeroOrbit size={670} rotation={240}>
        <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>  
        </div>
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
            Hello there! <br />I am Kamil
          </h1>
          <p className="text-center text-white/60 md:text-lg">
            I am a frontend developer that loves what he is doing :). Let's
            work together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-2xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDownIcon className="size-4 text-white" />
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