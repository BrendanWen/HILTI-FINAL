import "../styles/Dashboard.css";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";
import BarChart from "./BarChart.tsx";
import { FaArrowRight } from "react-icons/fa";
import JobStatsCard from "./JobStatsCard.tsx";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { JobOpening, ApplicantSummary } from "./ApplicantSummary.tsx";

function Dashboard() {
  const date = new Date();
  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="page-contents">
        <NavbarTop />

        <div className="greeting">
          <p className="greeting-title">Good Afternoon!</p>
          <p className="greeting-desc">
            Here are the job listings statistics report as of{" "}
            {date.toDateString()}.
          </p>
        </div>
        <main>
          <section className="section-btn-actions">
            <div className="btn-actions">
              <p className="btn-actions-number">76</p>
              <p className="btn-actions-desc">New candidates to review</p>
              <FaArrowRight size={20} className="btn-actions-icon" />
            </div>
            <div className="btn-actions">
              <p className="btn-actions-number">3</p>
              <p className="btn-actions-desc">Scheduled for today</p>
              <FaArrowRight size={20} className="btn-actions-icon" />
            </div>
            <div className="btn-actions">
              <p className="btn-actions-number">24</p>
              <p className="btn-actions-desc">Messages received</p>
              <FaArrowRight size={20} className="btn-actions-icon" />
            </div>
          </section>

          <section className="section-job-statistics">
            <div className="card-job-stats">
              <div className="card-jobs-stats-header">
                <p className="card-jobs-stats-header-title">Job statistics</p>
                <p className="card-jobs-stats-header-desc">
                  Showing job statistics as of {date.toDateString()}.
                </p>
                <div className="card-jobs-stats-header-tabs">
                  <ul className="card-tabs">
                    <li>Overview</li>
                    <li>Jobs Viewed</li>
                    <li>Jobs Applied</li>
                  </ul>
                </div>
              </div>

              <div className="card-jobs-stats-content">
                <div className="card-stats-overview">
                  <BarChart />
                </div>

                <div className="card-stats-other-flex">
                  <div className="card-stats-other">
                    <JobStatsCard
                      title="Job Views"
                      number="2,342"
                      description="This Week: 6.4% Up"
                      icon={<AiOutlineEye size={20} />}
                    />
                    <JobStatsCard
                      title="Job Applied"
                      number="654"
                      description="This Week: 0.5% Down"
                      icon={<HiOutlineClipboardList size={20} />}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-right-content">
              <div className="card-jobs-open">
                <JobOpening />
              </div>
              <div className="card-applicant-summary">
                <ApplicantSummary />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
