"use client";

import Image from "next/image";
import Choice from "./Choice";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex flex-col place-items-center z-[2] mb-10 mt-30">
        <Image
          className="relative"
          src="/ass.gif"
          alt="A twerking ass"
          width={370}
          height={370}
          priority
        />
      </div>
      <div className="relative flex flex-col place-items-center before:absolute z-[-1] mb-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Would you be my valentine? 🌹
        </p>
      </div>

      <Choice></Choice>
    </main>
  );
}
