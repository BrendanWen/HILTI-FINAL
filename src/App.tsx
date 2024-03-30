import "./styles/App.css";
import Navbar from "./components/Navbar.tsx";
import NavbarTop from "./components/NavbarTop.tsx";

function App() {
  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="page-contents">
        <NavbarTop />
      </div>
    </>
  );
}

export default App;
