import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import CVUpload from "./components/CVUpload.tsx";
import ApplicantsRanking from "./components/ApplicantsRanking/ApplicantsRanking.tsx";
import ApplicantDetails from "./components/ApplicantDetails/ApplicantDetails.tsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/applicant" element={<ApplicantDetails />} />
          <Route path="/cv-upload" element={<CVUpload />} />
          <Route path="/all-applicants" element={<ApplicantsRanking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
