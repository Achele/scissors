import { NavLink, useNavigate } from "react-router-dom";
import { UseUserAuth } from "../context/authContext";

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
    <header className="flex p-4 items-center justify-between bg-darkBlue">
      <NavLink to={"/urls"} className={"text-navText px-4"}>
        My URLs
      </NavLink>

      <div className="flex items-center">
        <h1 className="text-navText px-3">{user.displayName}</h1>
        <button
          className={"text-navText  text-base pr-4"}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default UserNavbar;
