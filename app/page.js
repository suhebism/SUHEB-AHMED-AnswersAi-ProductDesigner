"use client";
import Image from "next/image";
import logo2 from "../public/logo2.png";
import logo from "../public/logo.png";
import cap from '../public/cap.png'
import gif from '../public/gif.png'
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import AnimationButton from "@/components/AnimationButton";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import { useEffect } from "react";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    var mouse = { x: 0, y: 0 };
    var dotPos = { x: 0, y: 0 };
    var ballPos = { x: 0, y: 0 };
    var dotRatio = 0.2;
    var ballRatio = 0.1;
    var dot = document.getElementById("dot");
    var ball = document.getElementById("ball");
    var isMouseMoving = false;
    var idleTimer;
    var ballAnimation;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
      isMouseMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    });

    gsap.ticker.add(() => {
      dotPos.x += (mouse.x - dotPos.x) * dotRatio;
      dotPos.y += (mouse.y - dotPos.y) * dotRatio;
      gsap.set(dot, { x: dotPos.x, y: dotPos.y });

      ballPos.x += (dotPos.x - ballPos.x) * ballRatio;
      ballPos.y += (dotPos.y - ballPos.y) * ballRatio;
      gsap.set(ball, { x: ballPos.x, y: ballPos.y });

      if (!isMouseMoving && !ballAnimation) {
        ballAnimation = gsap
          .timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" })
          .to(ball, { scale: 1.2, duration: 0.75 });
      } else if (isMouseMoving && ballAnimation) {
        ballAnimation.kill();
        ballAnimation = null;
        gsap.to(ball, { scale: 1, duration: 0.75, ease: "power1.inOut" });
      }
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      gsap.ticker.remove(() => {});
      if (ballAnimation) ballAnimation.kill();
    };
  }, []);

  return (
    <main className="flex  flex-col items-center justify-between gap-10 bg-[#131416]">
      {/* <div className="container">
      <div id="dot" className="dot z-50"></div>
      <div id="ball" className="ball z-50"></div>
    </div> */}

      <Hero />
      <div className="z-10  h-screen flex flex-col gap-4 items-center justify-center">
        <div className=" mt-28 flex flex-col gap-4 items-center justify-center">
          <Image width={50} src={logo2}></Image>
          <AnimationButton text="AnswersAi" />
          {/* <Button text="AnswersAi" /> */}
          <h1 className="h-20 text-6xl font-semibold bg-gradient-to-b from-white via-neutral-500 to-neutral-800 inline-block text-transparent bg-clip-text">
            One Click, Question Solving
          </h1>
          <p className="text-base m-0 p-0 font-light">
            Accurate and Quick Explanations and Solutions on Web and Mobile.
          </p>
          <div className="flex gap-4">
            <Button text="Get Started" />
            <Button text="Download on mobile" />
          </div>
        </div>
      </div>
      <div className="w-4/5 h-[1px] bg-gradient-to-r from-[#131416] via-slate-600 to-[#131416]"></div>
      <div className="h-screen mt-16 flex flex-col items-center justify-center gap-10">
        <h1 className="h-20 text-6xl font-semibold bg-gradient-to-b from-white via-neutral-500 to-neutral-800 inline-block text-transparent bg-clip-text">
          Find Answers on
        </h1>
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <div className="w-[450px]">
            <div className="flex items-center gap-10 w-full">
              <AnimationButton text="Windows" />
              <h1>Mobile</h1>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#131416] via-slate-600 to-[#131416]"></div>
          </div>
          <div class="w-1/2 flex items-center justify-center bg-[#1F2022] border-[1px] border-[#6669F1] p-4 rounded-lg">
            <video
              class="aspect-[1.60] object-fill rounded-lg object-center w-full "
              autoplay=""
              loop=""
              playsinline=""
            >
              <source
                src="https://answersai.com/static/media/features-overview.c8ca4c89b9213da7516b.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-4/5 h-[1px] bg-gradient-to-r from-[#131416] via-slate-600 to-[#131416]"></div>
      <div className="w-full px-16 flex justify-between items-center my-10">
        <div className="w-1/3 flex flex-col">
          <div className="flex items-center gap-4">
            <Image width={50} src={cap}></Image>
            <h1 className="text-[#6366F1] justify-center text-3xl font-semibold">Boost your GPA</h1>
          </div>
          <div className="text-4xl font-semibold">with our Study Tools</div>
          <p className="text-sm text-[#6A6B6C] my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
          <Image width={200} src={logo}></Image>
        </div>
        <div className=" ">
          {/* this has to be a gif */}
          <Image width={400} src={gif} className=""></Image>
        </div>
      </div>
      <Features />
      <DownloadSection style={{marginTop:'-500px'}}/>
    </main>
  );
}
