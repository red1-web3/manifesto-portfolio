import { services } from "@/config/constants/services";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

const OurServicesSection = () => {
  const section = useRef(null);
  const titleWrapper = useRef(null);
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

      gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 8%",
          end: "bottom 8%",
          onEnter: () => {
            gsap.to(".__hamburger_white, .__logo_white", {
              duration: 0.2,
              autoAlpha: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(".__hamburger_white, .__logo_white", {
              duration: 0.2,
              autoAlpha: 0,
            });
          },
          onLeave: () => {
            gsap.to(".__hamburger_white, .__logo_white", {
              duration: 0.2,
              autoAlpha: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(".__hamburger_white, .__logo_white", {
              duration: 0.2,
              autoAlpha: 1,
            });
          },
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

      gsap.to(".__services_section_text", {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: bottomTextWrapper.current,
          start: "top 80%",
          end: "top 30%",
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
      className="py-40 mt-40 bg-white w-full scale-[.85] mx-auto"
    >
      <div ref={outerPinner} className="w-full">
        <h4
          className="text-black font-semibold __c_all text-center w-screen"
          ref={titleWrapper}
        >
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

        <div
          className="px-20 mt-28
        
        "
        >
          <div className="grid grid-cols-2 gap-x-[4%]" ref={bottomTextWrapper}>
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
  return (
    <div className="mt-28">
      <div className="origin-center relative">
        <ul className="__services_slider_wrapper">
          {services.map((service, i) => (
            <Service service={service} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const Service = ({ service }: { service: ReactNode }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        backgroundSize: "100%",
        scale: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <li
      ref={ref}
      style={{
        WebkitTextFillColor: "rgba(0, 0, 0, 0.15)",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(#000, #000)",
        backgroundSize: "0% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="text-black __services_list scale-75 text-[calc(1rem+3vw)]/[calc(1rem+4vw)] font-mona-sans-light uppercase text-center overflow-hidden"
    >
      {service}
    </li>
  );
};
