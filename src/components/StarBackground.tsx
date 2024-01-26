import { useEffect, useState } from "react"
// import styles from "../assets/stars.sass";

import "../assets/star-background.sass"

interface StarBackgroundProps {
  className: string
  maxXOffset: number
  maxYOffset: number
}

export function StarBackground({ className, maxXOffset, maxYOffset }: StarBackgroundProps) {
  const [initialNormalizedEntryPoint, setInitialNormalizedEntryPoint] = useState<{
    x: null | number
    y: null | number
  }>({
    x: null,
    y: null,
  })

  function parallax(event: TouchEvent | MouseEvent) {
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY

    function getNormalizedValue(value: number, maxValue: number): number {
      return (value - maxValue / 2) / (maxValue / 2)
    }

    if (initialNormalizedEntryPoint.x === null || initialNormalizedEntryPoint.y === null) {
      setInitialNormalizedEntryPoint({ x: getNormalizedValue(clientX, window.innerWidth), y: getNormalizedValue(clientY, window.innerHeight) })
    }
    if (initialNormalizedEntryPoint.x === null || initialNormalizedEntryPoint.y === null) {
      return
    }

    const xModifier = getNormalizedValue(clientX, window.innerWidth) - initialNormalizedEntryPoint.x
    const calculatedXOffset = maxXOffset * xModifier * -1

    const yModifier = getNormalizedValue(clientY, window.innerHeight) - initialNormalizedEntryPoint.y
    const calculatedYOffset = maxYOffset * yModifier * -1

    const smallStars = document.querySelector<HTMLElement>(`.star-background.${className}`)
    if (!smallStars) {
      console.error("Small stars element not found")
      return
    }

    smallStars.style.marginLeft = `${calculatedXOffset}px`
    smallStars.style.marginTop = `${calculatedYOffset}px`
  }

  useEffect(() => {
    console.log("Adding event listeners for mousemove and touchmove")
    document.addEventListener("mousemove", parallax)
    document.addEventListener("touchmove", parallax)

    return () => {
      console.log("Removing event listeners for mousemove and touchmove")
      document.removeEventListener("mousemove", parallax)
      document.removeEventListener("touchmove", parallax)
    }
  }, [initialNormalizedEntryPoint])

  return <div className={`star-background ${className}`} />
}
