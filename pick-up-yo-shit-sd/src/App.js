import fingerPoint from ".//fingerPoint.jpg";
import litterSd from ".//litterSd.jpg";
import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fingerPoint} className="App-logo" alt="logo" />
        <background
          img
          src={litterSd}
          className="App-background"
          alt="litterpic"
        />
        <p>
          <>Pick up yo SHIT SD!</>
        </p>
        <h1 strong> Hi, We're P . U . Yo . S . San Diego</h1>
        <h2>
          My wife and neice LOVE to go hiking. We go almost every weekend and
          couldnt help but notice all the f#$^@#*ng trash lying around! WTF
          SD?!?
        </h2>
        <h3>
          With 'do not litter signs' and trash cans aplenty, We still see tons
          of trash on every outing!!! Thats why we started Pick up yo Shit SD!
        </h3>
        <h4>
          We're tired of seeing the trash everywhere! So we're gonna do
          something about it!
        </h4>
        <h5>
          Every 2nd and 4th weekend of each month we will pick one local San
          Diego outdoor recreational area to clean the F*$@ UP!
        </h5>
        <h6>
          Interested in joining? Sign up below! Click the link for events near
          you! Welcome to Pick Up Yo SHIT SD!
        </h6>
        <Signup />
      </header>
    </div>
  );
}

export default App;
