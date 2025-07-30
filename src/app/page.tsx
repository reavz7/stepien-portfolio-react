import Image from "next/image";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/Hero";

export default function Home() {
  return (
    <>
        <Header/>
        <HeroSection/>
    </>   
  );
}