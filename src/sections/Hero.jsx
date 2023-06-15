import { Curves, LineThrough } from "../components/Icon";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section>
        <h1>
          {" "}
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
            <LineThrough className="absolute left-6 top-4 2xl:left-6 " />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4  2xl:left-6 " />
          </div>
          <div className="relative">
            <Curves />
            <LineThrough className="absolute left-6 top-4 2xl:left-6 " />
          </div>
        </div>

        {/* <div className="flex">
          {" "}
          <span className="">
            <Curves className="relative" />
            <LineThrough className="absolute left-6 top-28 2xl:left-6 xl:top-24" />
          </span>
          <span className="">
            <Curves className="relative" />
            <LineThrough className="absolute left-6 top-28 2xl:left-6 xl:top-24" />
          </span>
          <span className="">
            <Curves className="relative" />
            <LineThrough className="absolute left-6 top-28 2xl:left-6 xl:top-24" />
          </span>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
