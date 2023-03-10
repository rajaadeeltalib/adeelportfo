"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Web 3.0 Developer.", "Metaverse Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-white">WELCOME!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-designColor capitalize">Adeel Talib</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am certified Web 3.0 & Metaverse Developer. Technologies which I am expert are JavaScript, TypeScript, NodeJs, Next.js 13, TailwindCss, Figma, Strapi, BlockChain, Metaverse. 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF className="fill-[#ff014f]"/>
            </span>
            <span className="bannerIcon">
              <FaTwitter className="fill-[#ff014f]"/>
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn className="fill-[#ff014f]"/>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            BEST SKILL in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon ">
              <FaReact className="fill-[#ff014f]"/>
            </span>
            <span className="bannerIcon">
              <SiNextdotjs className="fill-[#ff014f]"/>
            </span>
            <span className="bannerIcon">
              <SiTailwindcss className="fill-[#ff014f]"/>
            </span>
            <span className="bannerIcon">
              <SiFigma className="fill-[#ff014f]"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
