import { useEffect } from "react";
// import styles from "../assets/stars.sass";

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
  function parallax(event: TouchEvent | MouseEvent) {
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY =
      "touches" in event ? event.touches[0].clientY : event.clientY;

    const xModifier = (clientX / window.innerWidth - 0.5) * 2; // left: -1, right: 1
    const calculatedXOffset = maxXOffset * xModifier * -1;
    const yModifier = (clientY / window.innerWidth - 0.5) * 2; // top: -1, bottom: 1
    const calculatedYOffset = maxYOffset * yModifier * -1;
    const smallStars = document.querySelector<HTMLElement>(
      `.star-background.${className}`
    );
    if (!smallStars) return;
    // smallStars.style.left = `calc(50vw + ${calculatedXOffset}px)`;
    smallStars.style.marginLeft = `${calculatedXOffset}px`;
    smallStars.style.marginTop = `${calculatedYOffset}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    document.addEventListener("touchmove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
      document.removeEventListener("touchmove", parallax);
    };
  }, []);
  return <div className={`star-background ${className}`} />;
}
