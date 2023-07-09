import { NavLink, useNavigate } from "react-router-dom";
import { UseUserAuth } from "../context/authContext";
// import { ChainIcon, LineIcon, LogoIcon } from "./Icon";

const UserNavbar = () => {
  const { user, logout } = UseUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log(`${user.email} logged out`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="flex p-4 items-center justify-between bg-darkBlue">
      <div>
        <NavLink to={"/urls"} className={"text-navText px-4"}>
          My URLs
        </NavLink>
      </div>
      <div>
        <h1 className="text-navText">{user.displayName}</h1>
        <button
          className={"text-navText  text-base pr-4"}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
