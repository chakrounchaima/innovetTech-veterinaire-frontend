
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
         
      <div className="profile">
        <img
          src="/a5282b956178fe69b6a554da12c9c7c4.jpg" 
          alt="User"
          className="profile-pic"
        />
        <p className="profile-name">Sarah Smith</p>
        <p className="profile-email">sarah.smith@gmail.com</p>
      </div>
      <ul className="menu">
        <li className="menu-item active">Accueil</li>
        <li className="menu-item">IA Assistant</li>
        <li className="menu-item">Patients</li>
        <li className="menu-item">Historique patient</li>
        <li className="menu-item">Liste des patients</li>
        <li className="menu-item">Fiche des patients</li>
        <li className="menu-item">Consultations</li>
        <li className="menu-item">Médicaments</li>
        <li className="menu-item">Rendez-vous</li>
        <li className="menu-item">Factures</li>
        <li className="menu-item">Paramètres</li>
      </ul>
    </div>
  );
}

export default Sidebar;

