import { services } from "@/config/constants/services";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const OurServicesSection = () => {
  const section = useRef(null);
  const title = useRef(null);
  const outerPinner = useRef(null);
  const bottomTextWrapper = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(section.current, {
        scale: 1,
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
          start: "-80px 10%",
          end: "-80px top",
          scrub: true,
        },
      });
      gsap.to(".__logo_white, .__hamburger_white", {
        clipPath: "inset(0 0 0 0)",

        scrollTrigger: {
          trigger: section.current,
          start: "77% 9%",
          scrub: true,
          onLeaveBack: () =>
            gsap.to(".__logo_white, .__hamburger_white", {
              clipPath: "inset(0 0 100% 0)",
              duration: 0,
            }),
        },
      });

      gsap.to(title.current, {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: title.current,
          start: "top bottom",
          end: "top 90%",
          scrub: 1,
        },
      });

      gsap.to(".__services_slider_wrapper", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
          scrub: 2,
        },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: outerPinner.current,
          start: "-5% 10%",
          end: "+=2000",
          pin: section.current,
          scrub: 1,
          onUpdate: (e) => {
            console.log(-e.progress * 100);

            gsap.set(".__services_slider_wrapper", {
              yPercent: -e.progress * 100,
            });
          },
        },
      });

      gsap.to(bottomTextWrapper.current, {
        yPercent: -150,
        scrollTrigger: {
          trigger: bottomTextWrapper.current,
          start: "400% top",
          end: "500% top",
          scrub: 3,
          markers: true,
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
      className="py-40 mt-40 bg-white w-full scale-[.85] mx-auto"
    >
      <div ref={outerPinner} className="w-full">
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

        <ServiceSlider />

        <div className="px-20">
          <div
            className="grid grid-cols-2 gap-x-[4%] translate-y-full"
            ref={bottomTextWrapper}
          >
            <div className="grid grid-cols-2">
              <span
                style={{
                  WebkitTextFillColor: "rgba(0, 0, 0, 0.15)",
                  WebkitBackgroundClip: "text",
                  backgroundImage: "linear-gradient(#000, #000)",
                  backgroundSize: "0% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="text-sm __services_section_text"
              >
                2023
              </span>
              <span
                style={{
                  WebkitTextFillColor: "rgba(0, 0, 0, 0.15)",
                  WebkitBackgroundClip: "text",
                  backgroundImage: "linear-gradient(#000, #000)",
                  backgroundSize: "0% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="text-sm font-medium __services_section_text"
              >
                Portfolio Website
              </span>
            </div>
            <div className="text-black">
              <span className="opacity-40 inline-block mr-8 -translate-y-2 text-sm">
                Short Quick Tip
              </span>

              <span
                style={{
                  WebkitTextFillColor: "rgba(0, 0, 0, 0.15)",
                  WebkitBackgroundClip: "text",
                  backgroundImage: "linear-gradient(#000, #000)",
                  backgroundSize: "0% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                className="text-[calc(1rem+1vw)]/[calc(1rem+1.5vw)] font-mona-sans-bold uppercase __services_section_text"
              >
                Our project pages are a playground for creativity where we
                leverage an assortment of shortcodes to build captivating
                content.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;

const ServiceSlider = () => {
  const sliderWrapper = useRef<null | HTMLUListElement>(null);
  const wrapper = useRef(null);

  return (
    <div className="mt-28">
      <div
        className="h-[50vh] origin-center overflow-hidden relative"
        ref={wrapper}
        style={{
          transform: "rotateX(35deg)",
        }}
      >
        <ul
          ref={sliderWrapper}
          className="__services_slider_wrapper translate-y-[35%]"
        >
          {services.map((service, i) => (
            <li
              key={i}
              className="text-black text-[calc(1rem+3vw)]/[calc(1rem+4.5vw)] text-center font-mona-sans-light uppercase"
            >
              {service}
            </li>
          ))}
        </ul>

        <div className="h-[15vh] w-full absolute top-0 left-0 bg-gradient-to-b from-white"></div>
        <div className="h-[15vh] w-full absolute bottom-0 left-0 bg-gradient-to-t from-white"></div>
      </div>
    </div>
  );
};
