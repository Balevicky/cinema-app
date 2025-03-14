import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Movie = () => {
  const [mouvieData, setMouvieData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((resp) => setMouvieData(resp.data.results));
  }, []);

  return (
    <div>
      <input
        type="text"
        name=""
        id="input"
        placeholder="Rechercher par nom du filme"
      />
      <br />
      <label htmlFor="input">Rechercher</label> <br />
      <div className="vote-container">
        <span>Filtrer par vote</span>
        <br />
        <button>
          Vote croissante <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </button>
        <button>
          Vote décroissante{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-down"
            // style={{ color: "white" }}
          />
        </button>
      </div>
      <ul>
        {mouvieData.map((mouvie) => (
          // <li key={mouvie.id}>{mouvie.title}</li>
          <Card key={mouvie.id} mouvie={mouvie} />
        ))}
      </ul>
    </div>
  );
};

export default Movie;
