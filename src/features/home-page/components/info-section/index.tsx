import LinkButton from "@/common/components/link-button";
import { articles } from "@/config/constants/articles";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const InfoSection = () => {
  return (
    <section className="py-28">
      <Marquee speed={150}>
        <h2 className="text-[calc(1rem+4.5vw)]/[calc(1rem+4.5vw)] uppercase">
          <span className="font-mona-sans-bold pl-2">Stay Informed. </span>
          <span className="font-mona-sans-light">The buzz feed. </span>
        </h2>
      </Marquee>

      <div className="mt-8">
        {articles.map((data, i) => (
          <Row key={i} {...data} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

const Row = ({
  date,
  category,
  title,
  description,
}: {
  date: string;
  category: string;
  title: ReactNode;
  description: string;
}) => {
  const parent = useRef(null);
  const descTarget = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: `top 20%`,
          onEnter: () => {
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);

            gsap.to(descTarget.current, {
              height: 0,
              autoAlpha: 0,
              ease: "power1.inOut",
              duration: 0.2,
            });

            gsap.to(parent.current, {
              autoAlpha: 0.3,
              pointerEvents: "none",
              ease: "power1.inOut",
              duration: 0.2,
              border: "none",
            });
          },
          onLeaveBack: () => {
            gsap.to(descTarget.current, {
              height: "auto",
              autoAlpha: 1,
              ease: "power1.inOut",
              duration: 0.2,
            });

            gsap.to(parent.current, {
              autoAlpha: 1,
              pointerEvents: "all",
              ease: "power1.inOut",
              duration: 0.2,
              borderBottom: "1px solid #0000001a",
            });
          },
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="grid grid-cols-2 py-20 px-20 __dsds border-b border-[#0000001a]"
      ref={parent}
      style={{
        borderBottom: "1px solid #0000001a",
      }}
    >
      <div className="grid grid-cols-2">
        <p className="text-[#777]"> {date}</p>
        <p className="text-[#777]"> {category}</p>
      </div>

      <div className="">
        <div className="text-[calc(1rem+1vw)]/[calc(1rem+1.5vw)] font-mona-sans-light uppercase">
          {title}
        </div>

        <p className="text-[#777] my-5 w-[60%]" ref={descTarget}>
          {description}
        </p>
        <LinkButton label="Read Article" />
      </div>
    </div>
  );
};
