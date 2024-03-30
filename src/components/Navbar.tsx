import "../styles/Navbar.css";
import hiltilogo from "../assets/Hilti-Logo.jpg";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo-div">
          <img src={hiltilogo} className="brand-logo" />
        </div>
        <ul className="nav-menu">
          <li>Dashboard</li>
          <li>Messages</li>
          <li>Company Profile</li>
          <li>All Applicants</li>
          <li>Job Listing</li>
          <li>My Schedule</li>
        </ul>
        <hr />
      </nav>

      <div className="settings"></div>
    </>
  );
}

export default Navbar;
