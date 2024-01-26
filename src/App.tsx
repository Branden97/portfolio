import "./assets/styles.sass";
import { StarBackground } from "./components/StarBackground";

function App() {
  return (
    <>
      <h1>
        Branden <span>Williams</span>
      </h1>

      <StarBackground className="small-stars" maxXOffset={10} maxYOffset={10} />
      <StarBackground
        className="medium-stars"
        maxXOffset={20}
        maxYOffset={20}
      />
      <StarBackground className="large-stars" maxXOffset={30} maxYOffset={30} />
      {/* <div className="medium-stars" />
      <div className="large-stars" /> */}
    </>
  );
}

export default App;
