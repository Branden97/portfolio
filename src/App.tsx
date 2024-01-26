import "./assets/styles.sass"
import { StarBackground } from "./components/StarBackground"

function App() {
  const starMotionPixelsX = 100
  const starMotionPixelsY = 20

  return (
    <>
      <h1>
        <span>Branden</span> <span>Williams</span>
      </h1>

      <div id="star-container">
        <StarBackground
          className="small"
          maxXOffset={starMotionPixelsX * 0.3}
          maxYOffset={starMotionPixelsY * 0.3}
        />
        <StarBackground
          className="medium"
          maxXOffset={starMotionPixelsX * 0.6}
          maxYOffset={starMotionPixelsY * 0.6}
        />
        <StarBackground
          className="large"
          maxXOffset={starMotionPixelsX * 1}
          maxYOffset={starMotionPixelsY * 1}
        />
      </div>
      {/* <div className="middle" /> */}
    </>
  )
}

export default App
