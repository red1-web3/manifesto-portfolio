import Magnetic from "@/common/components/magnetic";
import { social } from "@/config/constants/social";
import { cxm } from "@/utils";
import { Pivot as Hamburger } from "hamburger-react";
import { atom, useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navOverlayStatusAtom = atom<"" | "__activeNav" | "__deActiveNav">("");

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [navOverlayStatus, setnavOverlayStatus] = useAtom(navOverlayStatusAtom);

  const handleClickNavMenu = () => {
    setActiveNav((prev) => !prev);
    if (!navOverlayStatus) {
      setnavOverlayStatus((prev) =>
        prev === "__activeNav" ? "__deActiveNav" : "__activeNav"
      );
    }
  };

  return (
    <>
      <header className="py-8 pl-20 pr-[66px] fixed top-0 left-0 w-full z-[99]">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="relative">
            <Image
              src={"/imgs/logo-white.png"}
              alt="Logo white"
              width={42}
              height={50}
              className="__logo_white"
            />

            <div className="absolute top-0 left-0 z-[-1]">
              <Image
                src={"/imgs/logo.png"}
                alt="Logo white"
                width={42}
                height={50}
              />
            </div>
          </Link>

          <Magnetic>
            <button className="relative isolate" onClick={handleClickNavMenu}>
              <div className="__hamburger_white relative">
                <Hamburger size={20} toggled={activeNav} />
              </div>
              <div className="__hamburger_black absolute top-0 left-0 text-black z-[-1]">
                <Hamburger size={20} toggled={activeNav} />
              </div>
            </button>
          </Magnetic>
        </div>
      </header>
      {/* <Overlay /> */}
    </>
  );
};

export default Header;

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Overlay = () => {
  const [navOverlayStatus] = useAtom(navOverlayStatusAtom);
  const router = useRouter();
  console.log(navOverlayStatus);

  return (
    <div className={navOverlayStatus}>
      {/* Main Overlay */}
      <div className={cxm("fixed inset-0 bg-[#171614] z-[97] __overlay_main")}>
        <div className="absolute top-1/2 -translate-y-1/2 h-[75vh] left-[20.4%] w-[61.2%] p-8">
          <div className="flex justify-between h-full">
            <div className="h-full flex flex-col justify-between">
              <ul>
                {navItems.map(({ url, label }, i) => (
                  <li key={i}>
                    <Link href={url}>
                      <div
                        className={cxm(
                          "text-[calc(1rem+1.5vw)]/[calc(1rem+2.5vw)] font-bold relative before:absolute before:top-1/2 before:-left-2 hover:before:w-[115%] before:duration-300 before:w-0 before:h-1.5 before:bg-white/20 before:ease-in-out w-fit",
                          router.pathname === url && "before:w-[115%]"
                        )}
                      >
                        {label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-sm opacity-70">Visit our website:</p>
                <Magnetic>
                  <a
                    href="https://red-1.vercel.app/"
                    className="font-bold uppercase mt-2 inline-block"
                  >
                    Click here
                  </a>
                </Magnetic>
              </div>
            </div>
            <div className="flex items-end">
              <div>
                <a
                  href="mailto:red1.reachout@gmail.com"
                  className="text-sm opacity-80"
                  target="_blank"
                >
                  red1.reachout@gmail.com
                </a>

                <ul className="flex items-center gap-x-4 mt-5">
                  {social.map(({ icon, url }, i) => (
                    <Magnetic key={i}>
                      <li>
                        <a
                          href={url}
                          target="_blank"
                          className="text-xl inline-block hover:rotate-6 duration-300 ease-in-out"
                        >
                          {icon}
                        </a>
                      </li>
                    </Magnetic>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
