import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
