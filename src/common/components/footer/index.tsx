import Magnetic from "@/common/components/magnetic";
import { social } from "@/config/constants/social";
import gsap, { Expo } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { CSSProperties } from "react";
import { FaChevronUp } from "react-icons/fa";
import { ImShare2 } from "react-icons/im";

gsap.registerPlugin(ScrollToPlugin);
const Footer = () => {
  return (
    <footer className="relative">
      <div className="px-20 __c_all justify-between h-20">
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: 0,
              duration: 2,
              ease: Expo.easeInOut,
            });
          }}
          className="flex items-center gap-x-8 overflow-hidden group __back_top_btn"
        >
          <span className="-translate-y-px">
            <FaChevronUp />
          </span>
          <span className="text-sm/[30px] font-medium __back_top_text group-hover:-translate-y-[30px] inline-block duration-300 ease-in-out relative">
            Back Top
          </span>
        </button>

        <div className="text-sm/[30px] font-medium group absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          2023 ©{" "}
          <a
            href="https://red-1.vercel.app/"
            target="_blank"
            className="relative"
          >
            Red1
            <span className="absolute -bottom-px left-0 w-0 duration-300 group-hover:w-full ease-in-out h-0.5 bg-white"></span>
          </a>{" "}
          . All rights reserved.
        </div>

        <div className="relative group h-full flex items-center justify-end min-w-[280px]">
          <button className="flex items-center gap-x-8 group-hover:gap-0 duration-200 absolute right-0 top-1/2 -translate-y-1/2 group-hover:-translate-y-14 ease-in-out group-hover:pr-6">
            <span className="text-sm/[30px] font-medium shrink-0">
              Follow Us
            </span>
            <span className="group-hover:w-0 group-hover:scale-0 inline-block duration-100 delay-75">
              <ImShare2 />
            </span>
          </button>
          <div className="flex items-center gap-x-7 overflow-y-hidden px-6">
            {social.map(({ text, url }, i) => (
              <Magnetic key={i}>
                <a
                  style={
                    {
                      "--delay": `${i * 50}ms`,
                    } as CSSProperties
                  }
                  href={url}
                  className="text-sm/[30px] group-hover:delay-[--delay] font-medium translate-y-[100%] opacity-0 duration-300 ease-in-out group-hover:opacity-50 hover:!opacity-100 hover:!delay-0 group-hover:translate-y-0 inline-block"
                >
                  {text}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
