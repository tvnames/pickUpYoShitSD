import fingerPoint from "./img/fingerPoint.png";
import litterSd from "./img/litterSd.jpg";
import "./App.css";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundImage: `url(${litterSd})` }} />
        <img src={fingerPoint} className="App-logo" alt="logo" />
        <p>
          <>Pick up yo SHIT SD!</>
        </p>
        <Nav />
        <h1 strong> Hi, We're Pick Up Yo Sh$* San Diego</h1>
      </header>

      <h1>
        My wife and niece LOVE to go hiking. We go almost every weekend and
        couldn't help but notice all the f#$^@#*ng trash lying around! WTF SD?!?
      </h1>
      <h2>
        With 'do not litter signs' and trash cans aplenty, We still see tons of
        trash on every outing!!! Thats why we started Pick up yo Shit SD!
      </h2>
      <h3>
        We're tired of seeing the trash everywhere! So we're gonna do something
        about it!
      </h3>
      <h4>
        Every 2nd and 4th weekend of each month we will pick one local San Diego
        outdoor recreational area to clean the F*$@ UP!
      </h4>
      <h5>
        Interested in joining? Sign up below! Click the link for events near
        you! Welcome to Pick Up Yo SHIT SD!
      </h5>

      <Signup />
    </div>
  );
}

export default App;
