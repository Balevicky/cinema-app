import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Movie = () => {
  const [mouvieData, setMouvieData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [inputValue, setInputValue] = useState("code");
  const [croissantValue, setCroissantValue] = useState("");
  const [decroissantValue, setDecroissantValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=" +
          inputValue +
          "&language=fr-FR"
      )
      .then((resp) => setMouvieData(resp.data.results));
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr"
      )
      .then((resp) => setGenreData(resp.data.genres));
  }, [inputValue]);

  return (
    <div className="form-component">
      <form className="form-container">
        <input
          type="text"
          name=""
          id="input"
          placeholder="Taper le titre du film"
          // defaultValue={inputValue ? inputValue : "code"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="input">Rechercher par titre du film</label>
        <h4>Filtrer par vote</h4>
        <div className="btn-sort-container">
          <button
            id="croissant"
            onClick={(e) => {
              e.preventDefault();
              setCroissantValue(e.target.id);
              setDecroissantValue("");
            }}
          >
            {/* Vote croissante */}
            {/* <br /> */}
            <span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
            </span>
          </button>
          <button
            id="decroissant"
            onClick={(e) => {
              e.preventDefault();
              setDecroissantValue(e.target.id);
              setCroissantValue("");
            }}
          >
            {/* Vote décroissante */}
            <span>
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-down"
                // style={{ color: "white" }}
              />
            </span>
          </button>
        </div>
      </form>
      {mouvieData ? (
        <ul>
          {mouvieData
            .sort((a, b) => {
              if (croissantValue === "croissant") {
                return a.vote_average - b.vote_average;
              } else if (decroissantValue === "decroissant") {
                return b.vote_average - a.vote_average;
              }
            })
            .map((mouvie) => (
              // <li key={mouvie.id}>{mouvie.title}</li>

              <Card key={mouvie.id} mouvie={mouvie} genre={genreData} />
            ))}
        </ul>
      ) : (
        // <h2>Aucun film trouvé</h2>
        console.log("non trouvé")
      )}
    </div>
  );
};

export default Movie;
