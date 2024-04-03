import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Applicant from "./components/Applicant.tsx";
import CV from "./components/CV-upload.tsx";
import Login from "./components/LoginPage.tsx";
import Register from "./components/RegisterPage.tsx";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element = { <Login></Login> }></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
