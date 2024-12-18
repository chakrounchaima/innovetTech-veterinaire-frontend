import "./Dashbord.css";
import Planning from "./plannig";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="patients">
        <div className="patient-card">
          <p className="date">24 Avril 23</p>
          <h3>Étoile</h3>
          <p>Examen dentaire</p>
          <p>3 ans - Shetland</p>
          <p>Attente : 30 min</p>
          <div className="doctor">Dr. Shimon Hetmyer</div>
        </div>
        <div className="patient-card">
          <p className="date">31 Mai 23</p>
          <h3>Orage</h3>
          <p>Coliques</p>
          <p>10 ans - Frison</p>
          <p>Attente : 5 min</p>
          <div className="doctor">Dr. Shipra Rao</div>
        </div>
        <div className="patient-card">
          <p className="date">02 Juin 23</p>
          <h3>Tempête</h3>
          <p>Suivi opératoire</p>
          <p>8 ans - Appaloosa</p>
          <p>Attente : 30 min</p>
          <div className="doctor">Dr. Kartik Aryan</div>
        </div>
      </div>
      <Planning />
      <div className="stats">
        <div className="clinical-stats">
          <h3>Suivi des Opérations Cliniques</h3>
          <p>
            Taux d'occupation : <b>85%</b>
          </p>
          <p>
            Temps moyen de consultation : <b>45 min</b>
          </p>
          <p>
            Satisfaction client : <b>4.8/5</b>
          </p>
        </div>
      </div>
      <div style={{ color: "black" }}>mena ai</div>
    </div>
  );
}

export default Dashboard;