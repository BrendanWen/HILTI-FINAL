import "../styles/Applicant.css";
import { MdStar } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import NavbarTop from "./Navbar/NavbarTop";
function Applicant() {
  return (
    <>
      <div className="page-contents">
        <NavbarTop />
        <div className="applicant-top-nav">
          <div className="applicant-top-nav-group">
            <FaArrowLeft size={20} className="btn-actions-icon" />
            <p className="title-text">Applicant Details</p>
          </div>
          <div className="applicant-more-action-button">
            <IoIosArrowDown size={20} className="btn-actions-icon" />
            <p className="title2-text">More Action</p>
          </div>
        </div>

        <div className="body">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-header-details">
                <p className="title-text">Name</p>
                <p className="profile-header-details-desc">Job Title</p>
                <p>
                  <span className="star">
                    <MdStar />
                  </span>{" "}
                  5.0
                </p>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="buttons">
              <button>Schedule Interview</button>
              <button>
                <BiMessageAltDetail />
              </button>
            </div>
            <div className="contact">
              <br></br>
              <hr></hr>
              <h2>Contact</h2>
              <div className="contacts">
                <AiOutlineMail />
                <div className="content">
                  <h3>Email</h3>
                  <p>email address here...</p>
                </div>
              </div>
              <div className="contacts">
                <BsPhone />
                <div className="content">
                  <h3>Phone Number</h3>
                  <p>phone number here...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="description"></div>
        </div>
      </div>
    </>
  );
}

export default Applicant;
