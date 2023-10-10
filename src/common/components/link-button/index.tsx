import { cx } from "@/utils";
import { useState } from "react";

const LinkButton = ({ label }: { label: string }) => {
  const [activeStyle, setActiveStyle] = useState("");

  return (
    <a
      href="#"
      className={cx(
        "mt-4 text-xl font-medium flex items-center gap-x-5 group __link_button",
        activeStyle
      )}
      onMouseEnter={() => {
        setActiveStyle("noDuration");
        setTimeout(() => {
          setActiveStyle("hovered_link_btn");
        }, 200);
      }}
      onMouseLeave={() => {
        setActiveStyle("hover_out_link_btn");

        setTimeout(() => {
          setActiveStyle("noDuration");
        }, 500);
      }}
    >
      <span>{label}</span>
      <div className="w-[32px] aspect-square relative bg-white text-black rounded-full flex justify-center items-center overflow-hidden -rotate-45 __transition group-hover:rotate-0 group-hover:translate-x-2 group-hover:scale-125">
        <ArrowIcon className="w-[55%] absolute align-middle shrink-0 __transition icon1" />
        <ArrowIcon className="w-[55%] absolute align-middle shrink-0 __transition -translate-x-[150%] icon2" />
        <ArrowIcon className="w-[55%] absolute align-middle shrink-0 __transition -translate-x-[300%] icon3" />
      </div>
    </a>
  );
};

export default LinkButton;

const ArrowIcon = ({ className }: { className: string }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
    </svg>
  );
};
