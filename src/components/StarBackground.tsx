import { useEffect } from "react";
import styles from "../assets/stars.sass";

import "../assets/star-background.sass";

interface StarBackgroundProps {
  className: string;
  maxXOffset: number;
  maxYOffset: number;
}

export function StarBackground({
  className,
  maxXOffset,
  maxYOffset,
}: StarBackgroundProps) {
  function parallax(event: MouseEvent) {
    const xModifier = (event.clientX / window.innerWidth - 0.5) * 2; // left: -1, right: 1
    const calculatedXOffset = maxXOffset * xModifier * -1;
    const yModifier = (event.clientY / window.innerWidth - 0.5) * 2; // top: -1, bottom: 1
    const calculatedYOffset = maxYOffset * yModifier * -1;
    const smallStars = document.querySelector<HTMLElement>(`.${className}`);
    if (!smallStars) return;
    smallStars.style.left = `${calculatedXOffset}px`;
    smallStars.style.top = `${calculatedYOffset}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  return <div className={className} />;
}
