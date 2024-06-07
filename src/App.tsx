import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import CVUpload from "./components/CVUpload.tsx";
import Login from "./components/LoginPage.tsx";
import Register from "./components/RegisterPage.tsx";
import ApplicantDetails from "./components/ApplicantDetails/ApplicantDetails.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login></Login>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
