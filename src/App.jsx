import "./App.css";
import Faq from "./sections/Faq/Faq";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import GettingStarted from "./sections/GettingStarted";

import Hero from "./sections/Hero";
import Prices from "./sections/Prices";

function App() {
  return (
    <div className="font-inter">
      <Hero />
      <Features />
      <Prices />
      <Faq />
      <GettingStarted />
      <Footer />
    </div>
  );
}

export default App;
