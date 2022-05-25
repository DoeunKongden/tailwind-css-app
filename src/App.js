import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import Fade, { Flip, Roll, Zoom } from "react-reveal"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Fade>
      <Hero />
      </Fade>

      <Zoom>
      <About />
      </Zoom>

      <Fade>
        <Support />
      </Fade>
    </div>
  );
}

export default App;
