import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Prices from "../sections/Prices";
import Faq from "../sections/Faq/Faq";
import GettingStarted from "../sections/GettingStarted";
import Footer from "../sections/Footer";
import TrimUrl from "../sections/TrimUrl";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Prices />
        <TrimUrl />
        <Faq />
        <GettingStarted />
      </main>

      <Footer />
    </>
  );
};

export default Home;
