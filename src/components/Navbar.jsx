import { NavLink } from "react-router-dom";
import { ChainIcon, LineIcon, LogoIcon } from "./Icon";

const Navbar = () => {
  return (
    <nav className="flex p-3 items-center justify-between">
      <div className="flex items-center">
        <ChainIcon />
        <LineIcon />
        <LogoIcon className={""} />
      </div>
      <div>
        <NavLink to={"/urls"}>My URLs</NavLink>
        <NavLink to={"/features"}>Features</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/analytics"}>Analytics</NavLink>
        <NavLink to={"/faqs"}>FAQs</NavLink>
      </div>
      <div>
        <NavLink to={"/login"}>Log in</NavLink>
        <button>Try for free</button>
      </div>
    </nav>
  );
};

export default Navbar;
