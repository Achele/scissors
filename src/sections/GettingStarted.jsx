import { Link } from "react-router-dom";
import styles from "../styles/Hero.module.css";

const GettingStarted = () => {
  return (
    <section
      className={`${styles.bckgroundGradient} flex flex-col justify-center items-center p-8 my-8`}
      id="gettingStarted"
    >
      <h1 className="text-white font-semibold text-center py-4 text-4xl">
        Revolutionizing Link Optimization
      </h1>
      <Link
        className="rounded-full bg-primary py-1 text-white px-8 text-lg"
        to={"/signup"}
      >
        Get Started
      </Link>
    </section>
  );
};
export default GettingStarted;
