import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";

const Fovorite = () => {
  const [mouvieByID, setMouvieByID] = useState([]);
  let mouvieByIDArr = [];
  let tabGeneral = localStorage.mouvieID
    ? [...JSON.parse(localStorage.mouvieID)]
    : [];
  let id;

  useEffect(() => {
    for (id in tabGeneral) {
      // console.log(tabGeneral[id]);
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            tabGeneral[id] +
            "?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr"
        )
        .then((resp) =>
          mouvieByID.includes(resp.data.id)
            ? console.log("test")
            : setMouvieByID((mouvieByID) => [...mouvieByID, resp.data])
        );
      // setMouvieByID(resp.data);
      // mouvieByIDArr.push(mouvieByID);
      // console.log(mouvieByIDArr);
      // console.log(mouvieByIDArr);
      // console.log("test" + id);
    }
  }, [id]);

  return (
    <div>
      <Navigation />
      <h1>Favorite</h1>
      <ul>
        {/* {mouvieByID.map((mouvie) => (
          // <Card key={mouvie.id} mouvie={mouvie} genre={genreData} />
        ))} */}
      </ul>
    </div>
  );
};
//  .map((mouvie) => (
//             // <li key={mouvie.id}>{mouvie.title}</li>

//             <Card key={mouvie.id} mouvie={mouvie} genre={genreData} />
//           ))}
export default Fovorite;
