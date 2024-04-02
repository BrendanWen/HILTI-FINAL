import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Applicant from "./components/Applicant.tsx";
import CVUpload from "./components/CVUpload.tsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/cv-upload" element={<CVUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
