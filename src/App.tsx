import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import Navbar from "./components/Navbar.tsx";
import Applicant from "./components/Applicant.tsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applicant" element={<Applicant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
