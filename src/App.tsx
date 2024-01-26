import "./assets/styles.sass";
import { StarBackground } from "./components/StarBackground";

function App() {
  return (
    <>
      <h1>
        Branden <span>Williams</span>
      </h1>

      <div id="star-container">
        <StarBackground className="small" maxXOffset={10} maxYOffset={10} />
        <StarBackground className="medium" maxXOffset={20} maxYOffset={20} />
        <StarBackground className="large" maxXOffset={30} maxYOffset={30} />
      </div>
      {/* <div className="middle" /> */}
    </>
  );
}

export default App;
