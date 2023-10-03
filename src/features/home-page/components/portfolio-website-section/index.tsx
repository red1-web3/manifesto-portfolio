/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { ImageProps } from "next/image";
import { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";

const PortfolioWebsiteSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to("._portfolio_website_texts", {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: "._portfolio_website_texts",
          scrub: 1,
          start: "top 90%",
          end: "top 60%",
        },
      });
    });

    gsap.to(".__title_portfolio_website", {
      backgroundSize: "100% 100%",
      scrollTrigger: {
        trigger: ".__title_portfolio_website",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="-mt-[300px]">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-[237px,237px,519px] justify-center">
          <span
            style={{
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(#fff, #fff)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="relative mr-10 _portfolio_website_texts"
          >
            2023
          </span>
          <span
            style={{
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(#fff, #fff)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="relative mr-10 _portfolio_website_texts"
          >
            Portfolio Website
          </span>

          <div>
            <p
              style={{
                WebkitTextFillColor: "rgba(255,255,255,0.1)",
                WebkitBackgroundClip: "text",
                backgroundImage: "linear-gradient(#777, #777)",
                backgroundSize: "0% 100%",
                backgroundRepeat: "no-repeat",
              }}
              className="relative text-xl/[30px] font-medium inline _portfolio_website_texts"
            >
              Our template pages are a playground for creativity, where we
              leverage an assortment of shortcodes to build captivating content.
              This enables us to demonstrate the limitless potential and
              showcase the impressive features of our template.
            </p>

            <a
              href="#"
              className="mt-4 text-xl font-medium flex items-center gap-x-5 group"
            >
              <span>Learn More</span>

              <div className="text-base h-11 aspect-square scale-[.2] duration-200 ease-out group-hover:scale-100 __c_all text-black bg-white rounded-full">
                <span className="-translate-x-5 inline-block group-hover:scale-100 group-hover:translate-x-0 duration-200 ease-in scale-0">
                  <HiArrowRight />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Images --Start-- */}
      <div className="px-20 mt-32">
        <div className="grid grid-cols-2 gap-x-[25%]">
          <ImageComponent
            title="The Handbag"
            category="Photography"
            defaultHeight={600}
            img={{
              src: "/imgs/01hero.jpg",
              width: 505 * 5,
              height: 703 * 5,
              alt: "Image 1",
            }}
          />

          <div className="grid grid-cols-2 gap-x-16">
            <ImageComponent
              title="Woolen Craft"
              category="Product Design"
              defaultHeight={317}
              size="sm"
              img={{
                src: "/imgs/02hero.jpg",
                width: 217 * 5,
                height: 304 * 5,
                alt: "Image 2",
              }}
            />
            <ImageComponent
              title="Urban Edge"
              category="Photography"
              defaultHeight={317}
              size="sm"
              img={{
                src: "/imgs/03hero.jpg",
                width: 217 * 5,
                height: 304 * 5,
                alt: "Image 2",
              }}
            />
          </div>
        </div>
      </div>
      {/* Images --End-- */}

      <div className="mt-20">
        <h2 className="text-center text-[calc(1rem+1vw)]/[1rem+1.3vw] uppercase">
          <span
            className="mona-sans-light __title_portfolio_website"
            style={{
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(#fff, #fff)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            Immerse yourself in our
          </span>
          <br />
          <span
            style={{
              WebkitTextFillColor: "rgba(255,255,255,0.1)",
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(#fff, #fff)",
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="font-mona-sans-bold __title_portfolio_website"
          >
            World of stunning design
          </span>
        </h2>

        <div className="mt-5 __c_all">
          <button className="h-11 px-10 rounded-full border-2 border-white capitalize">
            View all works
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWebsiteSection;

const ImageComponent = ({
  category,
  defaultHeight,
  img,
  title,
  size = "lg",
}: {
  img: ImageProps;
  title: string;
  category: string;
  defaultHeight: number;
  size?: "sm" | "lg";
}) => {
  return (
    <div className="group">
      <div className="overflow-hidden" style={{ height: defaultHeight }}>
        <Image
          style={{ height: defaultHeight }}
          {...img}
          className="object-cover group-hover:scale-100 scale-105 duration-300"
        />
      </div>

      <div
        className={clsx(
          "flex items-center justify-between mt-5",
          size === "sm" && "flex-col gap-y-1 !items-start"
        )}
      >
        <div className="overflow-hidden">
          <h3
            className={clsx(
              "text-xl font-semibold opacity-0 -translate-y-full duration-200",
              "group-hover:!translate-y-0 group-hover:opacity-100"
            )}
          >
            {title}
          </h3>
        </div>
        <p className="text-sm font-medium opacity-0 delay-100 -translate-y-full duration-200 group-hover:!translate-y-0 group-hover:opacity-50">
          {category}
        </p>
      </div>
    </div>
  );
};
