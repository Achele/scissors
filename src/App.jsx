import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/authContext";
import ProctedRoutes from "./components/ProtectedRoutes";
import LinkRedirect from "./components/linkRedirect";

function App() {
  return (
    <div className="font-inter">
      <AuthContextProvider>
        <Routes>
          {/* > */}
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <ProctedRoutes>
                <Account />
              </ProctedRoutes>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:shortCode" element={<LinkRedirect />} />
          {/* </Switch> */}
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
