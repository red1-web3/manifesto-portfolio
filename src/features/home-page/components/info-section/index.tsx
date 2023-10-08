import LinkButton from "@/common/components/link-button";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

const InfoSection = () => {
  return (
    <section className="py-28">
      <Marquee speed={150}>
        <h2 className="text-[calc(1rem+4.5vw)]/[calc(1rem+4.5vw)] uppercase">
          <span className="font-mona-sans-bold">Stay Informed. </span>
          <span className="font-mona-sans-light">The buzz feed. </span>
        </h2>
      </Marquee>

      <div className="mt-28 px-20">
        <Row
          date="13 June 2023"
          category="UX and UI, Design, JavaScript"
          title={
            <h3>
              The Art Of{" "}
              <strong className="font-mona-sans-bold">Web Animation</strong>
            </h3>
          }
          description="Explore the creative and technical aspects of web animation, and discover how it can enhance user engagement and bring your website to life..."
        />
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
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-cols-2">
        <p className="text-[#777]"> {date}</p>
        <p className="text-[#777]"> {category}</p>
      </div>

      <div className="">
        <div className="text-[calc(1rem+1vw)]/[calc(1rem+1.5vw)] font-mona-sans-light uppercase">
          {title}
        </div>

        <p className="text-[#777] my-5 w-[60%]">{description}</p>
        <LinkButton label="Read Article" />
      </div>
    </div>
  );
};
