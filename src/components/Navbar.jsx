import { useState } from "react";
import { ChainIcon, LineIcon, LogoIcon } from "./Icon";
import "../styles/nav.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

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
        <ul className="nav1">
          <li
            onClick={() => {
              setDisplay((display) => !display);
              scroller.scrollTo("trimUrl", { smooth: true, offset: -80 });
            }}
          >
            <Link to="/" className={"text-primary px-1"}>
              {" "}
              My URLs
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay((display) => !display);
              scroller.scrollTo("features", { smooth: true, offset: -80 });
            }}
          >
            <Link to="/" className={"px-4"}>
              Features
            </Link>
          </li>

          <li
            onClick={() => {
              setDisplay((display) => !display);
              scroller.scrollTo("prices", { smooth: true, offset: -80 });
            }}
          >
            <Link to="/">Pricing</Link>
          </li>

          <NavLink
            to={"analytics"}
            className={"px-4"}
            onClick={() => setDisplay(false)}
          >
            Analytics
          </NavLink>
          <li
            onClick={() => {
              setDisplay((display) => !display);
              scroller.scrollTo("faqs", { smooth: true, offset: -80 });
            }}
          >
            <Link to="/">FAQs</Link>
          </li>
        </ul>
        <ul className="login">
          <NavLink
            to={"/login"}
            className={"text-primary text-base pr-1"}
            onClick={() => setDisplay((display) => !display)}
          >
            Log in
          </NavLink>
          <button
            className="rounded-full bg-primary text-white py-2 px-4 text-xs ml-2"
            onClick={() => setDisplay((display) => !display)}
          >
            Try for free
          </button>
        </ul>
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
