
import "./Statistiques.css";

const Statistiques = () => {
  return (
    <div className="statistiques-container">
      <div className="statistique-section">
        <h3>Insights IA</h3>
        <ul>
          <li>
            <strong>Analyses et suggestions basées sur l'IA</strong>
            <p>
              Tendance de santé : Augmentation des cas de coliques ce mois-ci. 
              Considérez une campagne de prévention.
            </p>
          </li>
          <li>
            <strong>Optimisation du planning</strong>
            <p>
              Suggestion : Ajoutez des créneaux le mercredi après-midi pour 
              réduire les temps d'attente.
            </p>
          </li>
          <li>
            <strong>Augmentation des revenus</strong>
            <p>
              Le revenu par consultation a augmenté de 5% ce trimestre. 
              Continuez à promouvoir les services préventifs.
            </p>
          </li>
        </ul>
      </div>
      <div className="statistique-section">
        <h3>Suggestions IA</h3>
        <ul>
          <li>
            <strong>Optimisation du stock</strong>
            <p>
              Commandez plus d'antibiotiques pour équins. Les stocks actuels 
              seront épuisés dans 2 semaines selon la tendance d'utilisation.
            </p>
          </li>
          <li>
            <strong>Recommandations</strong>
            <p>
              Envisagez une formation pour l'équipe sur les nouvelles techniques 
              de diagnostic.
            </p>
          </li>
          <li>
            <strong>Prévention</strong>
            <p>
              15 patients sont dus pour leur rappel de vaccination contre la 
              grippe équine ce mois-ci. Lancez une campagne de rappel.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistiques;
