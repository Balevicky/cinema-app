import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Card = ({ mouvie, genre }) => {
  const [arrFavorite, setArrFavorit] = useState([]);

  let tabGeneral = localStorage.mouvieID
    ? [...JSON.parse(localStorage.mouvieID)]
    : [];
  console.log(tabGeneral);

  // const [isNewArray, setIsNewArray] = useState(true);

  const getfavorite = () => {
    let tabGeneral = localStorage.mouvieID
      ? [...JSON.parse(localStorage.mouvieID)]
      : [];
    console.log(tabGeneral);
    if (tabGeneral.includes(mouvie.id)) {
      //remove to array
      let index = tabGeneral.indexOf(mouvie.id);
      if (index !== -1) {
        tabGeneral.splice(index, 1);
        console.log(tabGeneral);
        localStorage.mouvieID = JSON.stringify(tabGeneral);
        console.log(tabGeneral);
        console.log("ce id " + mouvie.id + " est supprimé!!");
      } else {
        return;
      }
    } else {
      // Add to array
      tabGeneral.push(mouvie.id);
      console.log(tabGeneral);
      localStorage.mouvieID = JSON.stringify(tabGeneral);
      console.log(tabGeneral);
    }

    // pour enregister en fichier Joson
    //  localStorage.exercises = JSON.stringify(exerciseArray);
    // pour recuperer en json
  };
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
        <h5>Genres: </h5>
        {/* ============================ */}
        <ul>
          {mouvie.genre_ids.map((genreId, index) => {
            return (
              <i key={index}>
                {genre.map((gender) => {
                  return (
                    genreId === gender.id && (
                      <li key={gender.id}>{gender.name}</li>
                    )
                  );
                })}
              </i>
            );
          })}
          {/* ============================= */}
        </ul>
        <h5>Synopsis</h5>
        <p>{mouvie.overview}</p>
        <FontAwesomeIcon
          icon="fa-solid fa-heart"
          // icon="fa-regular fa-heart"
          style={{ color: "red" }}
          onClick={(e) => getfavorite(e)}

          // {isColor ? style{{ color: "red" }:style{{ color: "blue" }}}
          // className={(nav) => (nav.isColor ? "fa-heart" : "fa-heartNon")}
        />
      </li>
    </div>
  );
};

export default Card;
