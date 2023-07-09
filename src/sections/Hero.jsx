import { Link } from "react-router-dom";
import { Arrow, Curves, LineThrough, Slash } from "../components/Icon";
import Navbar from "../components/Navbar";
// import heroImage from "../assets/Hero section.png";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <main className={`${styles.heroBackground} px-12 py-6 pb-16`}>
      <Navbar />
      <section className="my-4 mx-auto text-center">
        <h1 className="text-3xl lg:text-4xl w-3/4 lg:w-2/3 my-8 mx-auto p-8 pb-12 relative">
          Optimize Your Online Experience with Our Advanced{" "}
          <span className="text-blue text-primary">URL Shortening</span>{" "}
          Solution
        </h1>
        <Slash
          className={
            "absolute hidden md:block lg:block  md:top-46 md:left-1/2 lg:top-52 inset-x-40 left-2/4 "
          }
        />
        <p className="text-sm  w-2/3 lg:w-2/4 my-0 mx-auto pb-8">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <Link
          className="rounded-full bg-primary text-white py-2 px-8 text-xs mx-8"
          to={"/signup"}
        >
          Sign Up
        </Link>
        <Link className="text-primary">Learn more</Link>
      </section>

      <section className="my-10 mx-auto sm:w-1/2 lg:w-1/3 border border-primary p-8 rounded-xl">
        <div className="flex my-0 mx-auto p-5 ">
          <div className="relative">
            <Curves />
            <LineThrough className="xs:hidden md:block md:absolute md:left-6 md:top-4 2xl:left-6" />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="xs:hidden md:block md:absolute md:left-6 md:top-4 2xl:left-6" />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="xs:hidden md:block md:absolute md:left-6 md:top-4 2xl:left-6" />
          </div>
          <Arrow className={" px-4"} />
          <div className="relative">
            <Curves />
            <LineThrough className="xs:hidden md:block md:absolute md:left-6 md:top-4 2xl:left-6" />
          </div>
        </div>
        <p className="text-xs px-4">
          Seamlessly transform your long URLs into concise and shareable links
          with just a few clicks.
        </p>
      </section>
    </main>
  );
};

export default Hero;
