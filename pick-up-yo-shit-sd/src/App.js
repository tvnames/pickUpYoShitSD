import fingerPoint from "./img/fingerPoint.png";
import litterSd from "./img/litterSd.jpg";
import "./App.css";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Events from "./components/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <div className="App" align="right">
      <Signup />
      <header className="App-header">
        <div style={{ backgroundImage: `url(${litterSd})` }} />
        <img src={fingerPoint} className="App-logo" alt="logo" />

        <div class="jumbotron">
          <h1 class="display-4">Pick up your SH!% SD</h1>
        </div>
        <Nav />
      </header>
      <h1> Hi, We're Pick Up Your Sh!% San Diego</h1>
      <h1>
        My wife, niece, and LOVE to go hiking. We go almost every weekend and
        couldn't help but notice all the F#$^@#*NG trash lying around!
      </h1>
      <h1> WTF SD?!?</h1>
      <h2>
        With 'do not litter signs' and trash cans EVERYWHERE, Please pick up
        your trash is not getting the desired result.
      </h2>
      <h2>Thats why we started Pick up yo Shit SD!</h2>
      <h3>
        We're tired of seeing the trash everywhere and we're gonna do something
        about it!
      </h3>
      <h4>
        Every 2nd and 4th weekend of each month we will pick one local San Diego
        outdoor recreational area to clean it the F*$@ UP!
      </h4>
      <h5>
        Interested in joining? Sign up below! Click the link for events near
        you! Welcome to Pick Up Yo SHIT SD!
      </h5>
      <h6>
        <Events />
      </h6>
    </div>
  );
}

export default App;
