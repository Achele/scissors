import { useState } from "react";
import { ChainIcon, LineIcon, LogoIcon } from "./Icon";
import "../styles/nav.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="flex p-3 items-center justify-between">
      <div className="flex items-center ">
        <ChainIcon className={"w-5 "} />
        <LineIcon className={"h-5 px-2"} />
        <LogoIcon className={"w-14"} />
      </div>

      <nav className={`links ${display ? "visible" : "hidden"} `}>
        <div className="nav1">
          <NavLink
            to={"/urls"}
            className={"text-primary px-1"}
            onClick={() => setDisplay(false)}
          >
            My URLs
          </NavLink>
          <NavLink
            to={"features"}
            className={"px-4"}
            onClick={() => setDisplay(false)}
          >
            Features
          </NavLink>
          <NavLink
            to={"pricing"}
            className={""}
            onClick={() => setDisplay(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"analytics"}
            className={"px-4"}
            onClick={() => setDisplay(false)}
          >
            Analytics
          </NavLink>
          <NavLink to={"faqs"} onClick={() => setDisplay(false)}>
            FAQs
          </NavLink>
        </div>
        <div className="login">
          <NavLink
            to={"/login"}
            className={"text-primary text-base pr-1"}
            onClick={() => setDisplay(false)}
          >
            Log in
          </NavLink>
          <button
            className="rounded-full bg-primary text-white py-2 px-4 text-xs ml-2"
            onClick={() => setDisplay(false)}
          >
            Try for free
          </button>
        </div>
      </nav>

      <button
        className="mobile-nav"
        onClick={handleDisplay}
        aria-expanded={display}
      ></button>
    </header>
  );
};

export default Navbar;
