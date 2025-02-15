import Image from "next/image";
import ChaiyoKungWhiteLogo from "./chaiyokung-white-logo.svg";
import { Agbalumo, B612_Mono, Cormorant } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { ComponentProps } from "react";

const b612Mono = B612_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

const agbalumo = Agbalumo({
  weight: ["400"],
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: ["400"],
  subsets: ["latin"],
});

function VerticalLine() {
  return <div className="bg-white h-full w-[1px] absolute bottom-[14px] opacity-50"></div>;
}

function InterestListItem({
  label,
  font,
  className,
}: {
  label: string;
  font: NextFont;
  className?: ComponentProps<"span">["className"];
}) {
  return (
    <li className="flex items-center gap-1">
      <span className={`${font.className} text-white ${className}`}>{label}</span>
      <span className="bg-white h-[1px] w-3 opacity-50 mr-[1px]"></span>
    </li>
  );
}

function ListItemCode() {
  return <InterestListItem label="Code" font={b612Mono} className="text-sm md:text-base" />;
}

function ListItemDesign() {
  return <InterestListItem label="Design" font={agbalumo} className="text-base md:text-lg" />;
}

function ListItemMusic() {
  return <InterestListItem label="Music" font={cormorant} className="text-lg md:text-xl" />;
}

function InterestList() {
  return (
    <ul className="flex flex-col justify-end items-end">
      <ListItemCode />
      <ListItemDesign />
      <ListItemMusic />
    </ul>
  );
}

function Logo() {
  return (
    <Image
      src={ChaiyoKungWhiteLogo}
      alt="ChaiyoKung White Logo"
      width={1024}
      height={1024}
      className="w-32 h-32 md:w-48 md:h-48"
    />
  );
}

function Divider() {
  return <div className="bg-white w-full h-[1px] lg:w-[1px] lg:h-44 opacity-50"></div>;
}

function Hero() {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <h1 className="text-white text-5xl md:text-7xl break-all">ChaiyoKung</h1>
      <p className="text-white text-2xl md:text-4xl">สิ่งไหนที่ผมสนใจ ผมจะลงมือศึกษาและทำมัน</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4 relative">
      <div className="container absolute flex flex-col justify-end items-end h-[40vh] top-0 w-[80%] max-w-screen-xl">
        <VerticalLine />
        <InterestList />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <Logo />
        <Divider />
        <Hero />
      </div>
    </main>
  );
}
