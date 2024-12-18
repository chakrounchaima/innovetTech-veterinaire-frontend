import Dashboard from "../components/Dashbord";
import Planning from "../components/plannig";
import Sidebar from "../components/sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
        <div className="side">  <Sidebar />  </div>
        <div className="dash"> 
        <Dashboard />
        <Planning />
        </div>
    </div>
  )
}

export default Home