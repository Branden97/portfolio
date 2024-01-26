import "./assets/styles.sass"
import { StarBackground } from "./components/StarBackground"

function App() {
  return (
    <>
      <h1>
        <span>Branden</span> <span>Williams</span>
      </h1>

      <div id="star-container">
        <StarBackground className="small" maxXOffset={10} maxYOffset={5} />
        <StarBackground className="medium" maxXOffset={20} maxYOffset={15} />
        <StarBackground className="large" maxXOffset={30} maxYOffset={25} />
      </div>
      {/* <div className="middle" /> */}
    </>
  )
}

export default App
