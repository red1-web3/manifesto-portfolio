import "@/styles/globals.css";
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {};
  }, []);

  return (
    <div className={clsx(poppins.className)}>
      <Component {...pageProps} />
    </div>
  );
}
