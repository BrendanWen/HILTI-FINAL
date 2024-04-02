import "../../styles/Navbar/Navbar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdSchedule } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { CgList } from "react-icons/cg";
import hiltilogo from "../../assets/Hilti-Logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo-div">
          <img src={hiltilogo} className="brand-logo" />
        </div>
        <ul className="nav-menu">
          <li>
            <BiHomeAlt2 size={20} className="navbar-icon" />
            <Link to="/" className="nav-menu-link">
              Dashboard
            </Link>
          </li>
          <li>
            <BiMessageAltDetail size={20} className="navbar-icon" />
            <Link to="/messages" className="nav-menu-link">
              Messages
            </Link>
          </li>
          <li>
            <IoPeopleOutline size={20} className="navbar-icon" />
            <Link to="/" className="nav-menu-link">
              All Applicants
            </Link>
          </li>
          <li>
            <HiOutlineClipboardList size={20} className="navbar-icon" />
            <Link to="cv-upload" className="nav-menu-link">
              Uploaded Resume
            </Link>
          </li>
          <li>
            <MdSchedule size={20} className="navbar-icon" />
            <Link to="/" className="nav-menu-link">
              My Schedule
            </Link>
          </li>
          <li>
            <BiSearch size={20} className="navbar-icon" />
            <Link to="/" className="nav-menu-link">
              Digital Interview
            </Link>
          </li>
          <li>
            <CgList size={20} className="navbar-icon" />
            <Link to="/applicant" className="nav-menu-link">
              My Application
            </Link>
          </li>
        </ul>
        <hr className="navbar-line" />
        <div className="settings">
          <p className="navbar-settings-title">SETTINGS</p>
          <ul className="nav-menu">
            <li>
              <FiSettings size={20} className="navbar-icon" />
              Settings
            </li>
            <li>
              <BiHelpCircle size={20} className="navbar-icon" />
              Help Center
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
