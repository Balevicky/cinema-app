import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
// import Card from "../components/Card";

const Fovorite = () => {
  const [mouvieByID, setMouvieByID] = useState([]);
  let tabGeneral = localStorage.mouvieID
    ? [...JSON.parse(localStorage.mouvieID)]
    : [];

  useEffect(() => {
    // let mouvieByIDArr = [];
    for (let id = 0; id < tabGeneral.length; id++) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            tabGeneral[id] +
            "?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr"
        )
        .then((resp) =>
          setMouvieByID((mouvieByID) => [...mouvieByID, resp.data])
        );
      // .then((resp) => mouvieByIDArr.push(resp.data))
      // .then(() => setMouvieByID(mouvieByIDArr));
    }
  }, []);

  return (
    <div>
      <Navigation />

      {mouvieByID.length > 0 ? (
        <h2 className="result">Mes films préférés</h2>
      ) : (
        <h2 className="result">Aucun film préféré pour le moment </h2>
      )}
      <ul>
        {mouvieByID.map((mouvie) => {
          return <Card key={mouvie.id} mouvie={mouvie} genre={mouvie.genres} />;
        })}
      </ul>
    </div>
  );
};
//  .map((mouvie) => (
//             // <li key={mouvie.id}>{mouvie.title}</li>

//             <Card key={mouvie.id} mouvie={mouvie} genre={genreData} />
//           ))}
export default Fovorite;
