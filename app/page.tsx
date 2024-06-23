"use client";

import Vision from "../components/vision";
import Header from "../components/header";
import Faq from "../components/faq";
import Image from "next/image";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <main className="text-[#EEE] bg-y-repeat bg-[#000F16] min-h-screen relative">
        <div className="absolute top-0 left-0">
          <a href="https://hackclub.com/">
            <img
              src="/hack.png"
              className="w-[10rem] md:w-[15rem]"
              alt="banner"
            />
          </a>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] bg-[#7BCDFD] rounded-full filter blur-[200px] opacity-20"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] bg-[#7BCDFD] rounded-full filter blur-[200px] opacity-20"></div>
          </div>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[600px] h-[600px] bg-[#7BCDFD] rounded-full filter blur-[150px] opacity-20"></div>
          </div>
          <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-[700px] h-[700px] bg-[#7BCDFD] rounded-full filter blur-[180px] opacity-20"></div>
          </div>
        </div>
        <div className="relative z-10 flex justify-center items-center flex-col pt-[10rem] md:pt-[15rem]">
          <Header />
          <Vision />
          <Faq />
          <Team />
          <p className="text-center font-medium text-white/40 my-[3rem]">
            hackJersey, a fiscally sponsored 501(c)(3) nonprofit by The Hack
            Foundation. our EIN is <span className="font-mono">81-2908499</span>
          </p>
        </div>
      </main>
    </>
  );
}
