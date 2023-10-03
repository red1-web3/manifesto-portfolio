/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageWrapper = useRef(null);
  const textContentWrapper = useRef(null);
  const textContent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            pin: imageWrapper.current,
            start: "center center",
            end: "+=1500px",
            scrub: 2,
            onUpdate: (e) => {
              gsap.set(imageWrapper.current, {
                clipPath: `inset(0% ${30 - 30 * e.progress}%)`,
                scale: 0.8 + 0.2 * e.progress,
              });
            },
          },
        })
        .to(
          textContentWrapper.current,
          {
            yPercent: -140,
          },
          "-=.5"
        )
        .to(
          textContent.current,
          {
            backgroundSize: "100% 100%",
          },
          "+=.6"
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="pt-[180px]">
      <div className="text-center text-[calc(1rem+5.15vw)]/[calc(1rem+5.5vw)]">
        <p className="font-mona-sans-light uppercase">The Manifesto</p>
        <h1 className="font-mona-sans-bold uppercase">Portfolio Website</h1>
      </div>

      <p className="max-w-[260px] mx-auto text-xl font-medium mt-10 text-center">
        Experience the perfect blend of creativity and functionality
      </p>

      <div className="mt-16">
        <div
          style={{
            clipPath: "inset(0% 30%)",
          }}
          ref={imageWrapper}
          className="overflow-hidden scale-[.8]"
        >
          <img
            src="/imgs/00hero.jpg"
            alt="00hero"
            className="w-full h-screen __img object-cover mx-auto"
          />
        </div>

        <div className="px-[60px]">
          <h2
            className="text-[calc(1rem+3vw)]/[calc(1rem+3.5vw)] uppercase font-extrabold text-center font-mona-sans-bold"
            ref={textContentWrapper}
          >
            <span
              className="relative"
              style={{
                WebkitTextFillColor: "rgba(255,255,255,0.1)",
                WebkitBackgroundClip: "text",
                backgroundImage: "linear-gradient(#fff, #fff)",
                backgroundSize: "0% 100%",
                backgroundRepeat: "no-repeat",
              }}
              ref={textContent}
            >
              Stand out from the crowd and make a statement with our sleek and
              stylish portfolio template that speaks volumes about your
              creativity.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
