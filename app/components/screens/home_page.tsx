import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import { FloatingNavDemo } from "../navbar";

export function Home_Page() {
  return (
    <div>
        <FloatingNavDemo/>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Progres <br /> is the students gate<br/> to effeciency.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            progres is a platform that helps students to keep track of their academic progress and also help them to be more efficient in their studies.
        </p>
      </div>
    </div>
    </div>
    
  );
}
