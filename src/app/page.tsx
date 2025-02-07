import Image from "next/image";
import ChaiyoKungWhiteLogo from "./chaiyokung-white-logo.svg";

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
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <Logo />
        <Divider />
        <Hero />
      </div>
    </main>
  );
}
