import NavbarTop from "../Navbar/NavbarTop";
import "../../styles/ApplicantsRanking/ApplicantsRanking.css";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ApplicantsRankingTabs from "./ApplicantsRankingTabs";
import ApplicantsRankingSearch from "./ApplicantsRankingSearch";
import ApplicantsRankingHeader from "./ApplicantsRankingHeader";
import ApplicantsRankingRows from "./ApplicantsRankingRows";
import { Link } from "react-router-dom";

function ApplicantsRanking() {
  return (
    <>
      <NavbarTop />
      <div className="page-contents">
        <div className="ranking-top-nav">
          <div className="applicant-top-nav">
            <div className="applicant-top-nav-group">
              <FaArrowLeft size={20} className="btn-actions-icon" />
              <div style={{ textAlign: "center" }}>
                <p className="title2-text" style={{ marginTop: "2px" }}>
                  Cyber Security Architect
                </p>
                <p className="title3-text" style={{ marginTop: "2px" }}>
                  Full Time - 4 / 11 Hired
                </p>
              </div>
            </div>
            <div className="applicant-more-action-button">
              <IoIosArrowDown size={20} className="btn-actions-icon" />
              <p className="title2-text">More Action</p>
            </div>
          </div>
        </div>
        <div className="ranking-tabs">
          <ApplicantsRankingTabs />
        </div>
        <div className="ranking-content">
          <div className="ranking-content-top-nav">
            <ApplicantsRankingSearch />
          </div>
          <div className="ranking-content-dashboard">
            <div className="ranking-content-dashboard-header">
              <ApplicantsRankingHeader />
            </div>
            <div className="ranking-content-dashboard-rows">
              <Link to="/applicant" className="nav-menu-link">
                <ApplicantsRankingRows
                  name="John Mayer"
                  score="5"
                  stage="In Review"
                  date="13 July, 2021"
                />
              </Link>

              <ApplicantsRankingRows
                name="Daniel Smith"
                score="4"
                stage="In Review"
                date="13 June, 2021"
              />

              <ApplicantsRankingRows
                name="Floydd Miles"
                score="5"
                stage="In Review"
                date="13 June, 2021"
              />

              <ApplicantsRankingRows
                name="James Bond"
                score="5"
                stage="In Review"
                date="13 June, 2021"
              />
            </div>
            <div className="ranking-content-dashboard-selector"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantsRanking;
