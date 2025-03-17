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
    <div>
      <input
        type="text"
        name=""
        id="input"
        placeholder="Rechercher par nom du filme"
        defaultValue={inputValue ? inputValue : "code"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <label htmlFor="input">Rechercher</label> <br />
      <div className="vote-container">
        <span>Filtrer par vote</span>
        <br />
        <button
          id="croissant"
          onClick={(e) => {
            setCroissantValue(e.target.id);
            setDecroissantValue("");
          }}
        >
          Vote croissante <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </button>
        <button
          id="decroissant"
          onClick={(e) => {
            setDecroissantValue(e.target.id);
            setCroissantValue("");
          }}
        >
          Vote décroissante{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-down"
            // style={{ color: "white" }}
          />
        </button>
      </div>
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
    </div>
  );
};

export default Movie;
