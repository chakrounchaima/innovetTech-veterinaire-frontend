import "./Planning.css";

function Planning() {
  // Exemple d'événements
  const events = [
    { id: 1, time: "Lundi 20", label: "Consultation" },
    { id: 2, time: "Mardi 21", label: "Consultation" },
    { id: 3, time: "Mercredi 22", label: "Consultation" },
    { id: 4, time: "Jeudi 23", label: "Consultation" },
    { id: 5, time: "Vendredi 24", label: "Consultation" },
  ];

  return (
    <div className="planning-container">
      <h3 className="planning-title">Planning</h3>
      <div className="planning-timeline">
        {events.map((event) => (
          <div key={event.id} className="planning-event">
            <p className="event-time">{event.time}</p>
            <div className="event-label">{event.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planning;