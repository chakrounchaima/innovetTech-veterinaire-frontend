import Dashboard from "../componets/Dashbord.jsx";
import Sidebar from "../componets/sidebar.jsx";
import "./Home.css";

function Home() {
  return (
    
    <div className="wrapper">
        <div className="side">
        {/* Chemin du logo dans le dossier public */}
        <div className="logo"> <img src="/WhatsApp Image 2024-12-12 à 11.08.56_5c3266d1.jpg" alt="Logo" className="logo" /></div>
    
 
        {" "}
       <Sidebar />
        </div>
        
        {" "}
       
      <div className="dash">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;