import "../styles/Dashboard.css";
import Navbar from "./Navbar.tsx";
import NavbarTop from "./NavbarTop.tsx";

function Dashboard() {
  const currentDate = new Date();
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
            Here are the job listings statistics report for{" "}
            {currentDate.toDateString()}
          </p>
        </div>
        <main></main>
      </div>
    </>
  );
}

export default Dashboard;
