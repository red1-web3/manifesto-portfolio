import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const OurServicesSection = () => {
  const section = useRef(null);
  const title = useRef(null);
  const outerPinner = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(section.current, {
        y: 0,
        width: "100%",
        scrollTrigger: {
          trigger: section.current,
          start: "top bottom",
          end: "top 75%",
          scrub: 1,
        },
      });

      gsap.to(".__logo_white, .__hamburger_white", {
        clipPath: "inset(0 0 100% 0)",

        scrollTrigger: {
          trigger: section.current,
          start: "-90px 10%",
          end: "-90px top",
          scrub: true,
        },
      });
      gsap.to(".__logo_white, .__hamburger_white", {
        clipPath: "inset(0 0 0 0)",

        scrollTrigger: {
          trigger: section.current,
          start: "77% 9%",
          scrub: true,
        },
      });
      //   gsap.to(".__logo_white, .__hamburger_white", {
      //     clipPath: "inset(0 0 100% 0)",

      //     scrollTrigger: {
      //       trigger: section.current,
      //       start: "76% 9%",
      //       scrub: true,
      //       markers: true,
      //     },
      //   });

      gsap.to(title.current, {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: title.current,
          start: "top bottom",
          end: "top 90%",
          scrub: 1,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={section}
      className="py-40 mt-40 bg-white w-[80%] mx-auto translate-y-20"
    >
      <div ref={outerPinner}>
        <h4 className="text-black font-semibold __c_all text-center w-screen">
          <span
            ref={title}
            style={{
              WebkitTextFillColor: "rgba(0, 0, 0, 0.15)",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(#000, #000)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {"[ Our Services ]"}
          </span>
        </h4>
      </div>
    </section>
  );
};

export default OurServicesSection;
