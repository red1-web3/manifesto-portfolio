import gsap from "gsap";
import { useEffect, useRef } from "react";

const StudioSection = () => {
  const target = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(target.current, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: target.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="pt-[180px] pb-[130px]">
      <div className="text-center opacity-0" ref={target}>
        <h2>
          <p className="text-[calc(1rem+5.15vw)]/[calc(1rem+5.5vw)] font-mona-sans-light uppercase">
            Discover
          </p>
          <p className="text-[calc(1rem+5.15vw)]/[calc(1rem+5.5vw)] font-mona-sans-bold uppercase">
            Our Studio
          </p>
        </h2>

        <p className="text-xl font-medium mt-5">
          Exploring our World of Visual Design
        </p>
      </div>
    </section>
  );
};

export default StudioSection;
