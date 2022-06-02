import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Support from "./components/Support";
import Fade, { Zoom } from "react-reveal"
import AllinOne from "./components/AllinOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


function App() {
  // Scroll to top after reloaded

  window.onbeforeunload = function() {
    window.scrollTo(0,0);
    DelayNode(1000)
  }

  return (
    <div className="App">
      <Navbar />
        <Hero />

      <Zoom>
        <About />
      </Zoom>

      <Fade>
        <Support />
      </Fade>

      <Fade>
        <AllinOne />
      </Fade>

      <Fade>
      <Pricing />
      </Fade>

      <Footer />

    </div>
  );
}

export default App;
