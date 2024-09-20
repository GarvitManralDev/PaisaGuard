import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewUser from "./pages/NewUser";
import ExistingUser from "./pages/ExistingUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/ExistingUser" element={<ExistingUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
