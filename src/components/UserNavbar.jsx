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
    <nav className="flex p-3 items-center justify-between">
      <div>
        <NavLink to={"/urls"} className={"text-primary px-1"}>
          My URLs
        </NavLink>
      </div>
      <div>
        {/* <h1>{user.displayName}</h1> */}
        <button
          className={"text-primary text-base pr-1"}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
