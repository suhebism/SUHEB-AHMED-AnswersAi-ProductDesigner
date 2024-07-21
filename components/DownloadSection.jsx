import React from "react";
import AnimationButton from "./AnimationButton";
import apple from '../public/apple.png'
import phone from '../public/phone.png'
import Image from "next/image";
const DownloadSection = () => {
  return (
    <div className="-mt-96 z-10 flex flex-col items-center justify-center gap-1">
      <h1 className="h-20 text-4xl font-semibold bg-gradient-to-b from-white via-neutral-500 to-neutral-800 inline-block text-transparent bg-clip-text">
        Snap | Solve | Learn
      </h1>
      <p className="text-xs font-light">Unlock Photo Solve, Essay Mode, and more on iOS & Android. Download the app today.</p>
      <div className="flex flex-col items-center gap-10">
        <div className="flex">
            <AnimationButton text="Apple" />
            <AnimationButton text="Android" />
        </div>
      <Image src={phone} width={300}/>
      </div>
    </div>
  );
};

export default DownloadSection;
