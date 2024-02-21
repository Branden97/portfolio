import React, { useState, useEffect } from "react"

const ScreenDimensions = () => {
  // Initialize state with window width and height
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      // Update state with new width and height
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures this runs once on mount and unmount

  return (
    <p>
      {dimensions.width} x {dimensions.height}
    </p>
  )
}

export default ScreenDimensions
