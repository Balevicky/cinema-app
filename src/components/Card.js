import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Card = ({ mouvie }) => {
  const [isColor, setIsColor] = useState(false);
  const getGenre = () => {
    isColor ? setIsColor(true) : setIsColor(false);
  };
  // getGenre();
  return (
    <div>
      <li>
        <img
          src={"https://image.tmdb.org/t/p/original/" + mouvie.poster_path}
          alt={"photo de " + mouvie.title}
        />
        <h4> {mouvie.title}</h4>
        <h5>Sortie le:{mouvie.release_date}</h5>
        <h5>
          Vote: {mouvie.vote_average}/10
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "yellow" }}
          />
        </h5>
        <ul>
          <h5>Genres: </h5>
          {mouvie.genre_ids.map((genre, index) => (
            <li className="genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <h5>Synopsis</h5>
        <p>{mouvie.overview}</p>

        <FontAwesomeIcon
          icon="fa-solid fa-heart"
          onClick={() => getGenre()}
          // {isColor ? style{{ color: "red" }:style{{ color: "blue" }}}
          // className={(nav) => (nav.isColor ? "fa-heart" : "fa-heartNon")}
        />
      </li>
    </div>
  );
};

export default Card;
