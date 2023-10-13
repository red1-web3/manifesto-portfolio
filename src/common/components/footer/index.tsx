import { social } from "@/config/constants/social";
import { FaChevronUp } from "react-icons/fa";
import { ImShare2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="">
      <div className="px-20 __c_all justify-between h-20">
        <button className="flex items-center gap-x-8 overflow-hidden group __back_top_btn">
          <span className="-translate-y-px">
            <FaChevronUp />
          </span>
          <span className="text-sm/[30px] font-medium __back_top_text group-hover:-translate-y-[30px] inline-block duration-300 ease-in-out relative">
            Back Top
          </span>
        </button>

        <div className="text-sm/[30px] font-medium group">
          2023 ©{" "}
          <a href="https://red-1.vercel.app/" className="relative">
            Red1
            <span className="absolute bottom-0 left-0 w-0 duration-300 group-hover:w-full ease-in-out h-0.5 bg-white"></span>
          </a>{" "}
          . All rights reserved.
        </div>

        <div className="relative group">
          <button className="flex items-center gap-x-8 group-hover:gap-0 duration-200 absolute right-0 top-0 group-hover:-translate-y-10 ease-in-out">
            <span className="text-sm/[30px] font-medium">Follow Us</span>
            <span className="group-hover:w-0 group-hover:scale-0 inline-block duration-200">
              <ImShare2 />
            </span>
          </button>
          <div className="flex items-center gap-x-5 overflow-hidden">
            {social.map(({ text, url }, i) => (
              <a
                href={url}
                key={i}
                className="text-sm/[30px] font-medium translate-y-[100%] opacity-0 inline-block"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
