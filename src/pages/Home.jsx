import Dashboard from "../components/Dashbord";

import Sidebar from "../components/sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="side">
        {" "}
        <div style={{ color: "black" }}>inova</div>
        <Sidebar />{" "}
      </div>
      <div className="dash">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;