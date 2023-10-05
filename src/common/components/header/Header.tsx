import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
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

        <div className="relative">
          <div className="__hamburger_white">
            <Hamburger size={20} />
          </div>
          <div className="__hamburger_black absolute top-0 left-0 z-[-1] text-black">
            <Hamburger size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
