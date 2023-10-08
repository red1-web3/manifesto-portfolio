import { HiArrowRight } from "react-icons/hi";

const LinkButton = ({ label }: { label: string }) => {
  return (
    <a
      href="#"
      className="mt-4 text-xl font-medium flex items-center gap-x-5 group"
    >
      <span>{label}</span>

      <div className="text-base h-11 aspect-square scale-[.2] duration-200 ease-out group-hover:scale-100 __c_all text-black bg-white rounded-full">
        <span className="-translate-x-5 inline-block group-hover:scale-100 group-hover:translate-x-0 duration-200 ease-in scale-0">
          <HiArrowRight />
        </span>
      </div>
    </a>
  );
};

export default LinkButton;
