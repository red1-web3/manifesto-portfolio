/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { ReactElement, useEffect, useRef } from "react";

interface MagneticProps {
  children: ReactElement;
}

export default function Magnetic({ children }: MagneticProps): ReactElement {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current!!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 1);
      yTo(y * 1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    if (magnetic.current) {
      magnetic.current.addEventListener("mousemove", handleMouseMove);
      magnetic.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener("mousemove", handleMouseMove);
        magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [children]);

  return <div ref={magnetic}>{children}</div>;
}
