import "./assets/css-reset.css"
import asdf from "./assets/branden.jpg"
import "./assets/styles.sass"
import { StarBackground } from "./components/StarBackground"
import { Section } from "./components/Section"
import { ChatSuggestion } from "./components/ChatSuggestion"
import ScreenDimensions from "./components/ScreenDimensions/ScreenDimensions"

const CHAT_SUGGESTION_OPTIONS = [
  [`Summarize`, `Branden's professional experience with React`],
  [`Is Branden a good fit`, `for this job description?`],
  [`Is Branden a good fit`, `for a leadership role?`],
  [`Is Branden a good fit`, `for a leadership role?`],
]

function Header() {
  return (
    <header className="flex flex-row w-full fixed top-0 justify-between text-zinc-300 z-10 ">
      {/* backdrop-blur-md */}
      <button className="p-2 px-3">
        <span className="font-bold subpixel-antialiased text-xl">BW</span>
      </button>
      <ScreenDimensions />
      <button
        type="button"
        className="items-center justify-center rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="-scale-x-100"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M3 8c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1s-.4477 1-1 1H4c-.55228 0-1-.44772-1-1Zm0 8c0-.5523.44772-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.55228 0-1-.4477-1-1Z"
          />
        </svg>
      </button>
    </header>
  )
}

function App() {
  const starMotionPixelsX = 100
  const starMotionPixelsY = 20

  return (
    <>
      <Header />
      <div id="gradient-background" />
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
      <Section className="text-zinc-300 pt-11 px-4 items-center h-svh">
        {/* Picture and Name */}
        <div className=" mt-6 flex flex-row items-center font-bold gap-4">
          <img
            id="profile-photo"
            src={asdf}
            className="w-28 h-28 rounded-full"
          ></img>
          <h1 className="break-words text-4xl w-min">
            {/* Branden Williams */}
            <span className="gradient-text">Branden</span>{" "}
            <span className="gradient-text">Williams</span>
          </h1>
        </div>

        <div className="flex shrink mt-4 text-xl font-semibold leading-snug justify-center align-middle items-center">
          <h2 className=" ">
            A Full Stack Software Engineer skilled at turning concepts into
            production-ready solutions.
          </h2>
        </div>

        <h2 className=" mt-4 text-lg leading-10">Explore my Resume with AI</h2>
        <div className="w-full grid overflow-hidden  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 ">
          {CHAT_SUGGESTION_OPTIONS.map((option, index) => (
            <ChatSuggestion
              key={index}
              className=" highlight-on-focus first:flex hidden short:[&:nth-child(2)]:flex tall:flex"
              firstPart={option[0]}
              secondPart={option[1]}
            />
          ))}
        </div>

        <div className="p-4  flex flex-col items-center between grow">
          <div className="flex flex-col items-center grow justify-center">
            <button className="glowing-boarder btn before:highlight-on-focus ">
              Explore with AI
            </button>
          </div>
          <img src="arrow.svg" className="text-white" width={31.75} />
        </div>
      </Section>
      <Section className="text-zinc-300 pt-11 bg-slate-900">
        <p>Section 2</p>
      </Section>
    </>
  )
}

export default App
