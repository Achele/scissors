// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Prices from "../sections/Prices";
import Faq from "../sections/Faq/Faq";
import GettingStarted from "../sections/GettingStarted";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Prices />
        <Faq />
        <GettingStarted />
      </main>

      <Footer />
    </>
  );
};

export default Home;
