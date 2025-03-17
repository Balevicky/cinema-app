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
    let mouvieByIDArr = [];
    for (let id = 0; id < tabGeneral.length; id++) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            tabGeneral[id] +
            "?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr"
        )
        .then((resp) => mouvieByIDArr.push(resp.data))
        .then(() => setMouvieByID(mouvieByIDArr));
    }
  }, []);

  // const deletefavorite = () => {
  //   let tabGeneral = localStorage.mouvieID
  //     ? [...JSON.parse(localStorage.mouvieID)]
  //     : [];

  //   if (tabGeneral.includes(mouvie.id)) {
  //     //remove to array
  //     let index = tabGeneral.indexOf(mouvie.id);
  //     if (index !== -1) {
  //       tabGeneral.splice(index, 1);
  //       localStorage.mouvieID = JSON.stringify(tabGeneral);
  //       console.log("ce id " + mouvie.id + " est supprimé!!");
  //       findMoviebyID();
  //     } else {
  //       return;
  //     }
  //   }
  // };

  return (
    <div>
      <Navigation />
      <h1>Favorite</h1>
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
