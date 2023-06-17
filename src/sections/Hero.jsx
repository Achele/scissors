import { Arrow, Curves, LineThrough } from "../components/Icon";
import Navbar from "../components/Navbar";
// import heroImage from "../assets/Hero section.png";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <main className={styles.heroBackground}>
      <Navbar />
      <section>
        <h1>
          Optimize Your Online Experience with Our Advanced{" "}
          <span className="text-blue text-sky-500">URL Shortening</span>{" "}
          Solution
        </h1>
        <p className="text-sm">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
      </section>

      <section>
        <div className="flex">
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4 2xl:left-6" />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4 2xl:left-6" />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4 2xl:left-6" />
          </div>
          <Arrow />
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4 2xl:left-6" />
          </div>
        </div>
        <p>
          Seamlessly transform your long URLs into concise and shareable links
          with just a few clicks.
        </p>
      </section>
    </main>
  );
};

export default Hero;
