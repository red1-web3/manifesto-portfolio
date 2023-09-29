import { Pivot as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 px-20 fixed top-0 left-0 w-full z-[99]">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/imgs/logo-white.png"}
            alt="Logo white"
            width={42}
            height={50}
          />
        </Link>

        <div className="flex items-center gap-x-10">
          <button className="text-white">
            <Hamburger size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
