import { NavLink } from "react-router-dom";
import { ChainIcon, LineIcon, LogoIcon } from "./Icon";

const Navbar = () => {
  return (
    <nav className="flex p-3 items-center justify-between">
      <div className="flex items-center ">
        <ChainIcon className={"w-5 "} />
        <LineIcon className={"h-5 px-2"} />
        <LogoIcon className={"w-12"} />
      </div>
      <div>
        <NavLink to={"/urls"} className={"text-primary px-1"}>
          My URLs
        </NavLink>
        <NavLink to={"/features"} className={"px-4"}>
          Features
        </NavLink>
        <NavLink to={"/pricing"} className={""}>
          Pricing
        </NavLink>
        <NavLink to={"/analytics"} className={"px-4"}>
          Analytics
        </NavLink>
        <NavLink to={"/faqs"}>FAQs</NavLink>
      </div>
      <div>
        <NavLink to={"/login"} className={"text-primary text-base pr-1"}>
          Log in
        </NavLink>
        <button className="rounded-full bg-primary text-white py-2 px-4 text-xs ml-2">
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
