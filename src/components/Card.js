import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Card = ({ mouvie, genre }) => {
  let tabGeneral = localStorage.mouvieID
    ? [...JSON.parse(localStorage.mouvieID)]
    : [];
  const [isColor, setisColor] = useState(false);
  const getfavorite = (e) => {
    let tabGeneral = localStorage.mouvieID
      ? [...JSON.parse(localStorage.mouvieID)]
      : [];

    if (tabGeneral.includes(mouvie.id)) {
      //remove to array

      let index = tabGeneral.indexOf(mouvie.id);
      if (index !== -1) {
        tabGeneral.splice(index, 1);
        localStorage.mouvieID = JSON.stringify(tabGeneral);
        console.log("ce id " + mouvie.id + " est supprimé!!");
      } else {
        return;
      }
    } else {
      // Add to array

      tabGeneral.push(mouvie.id);
      localStorage.mouvieID = JSON.stringify(tabGeneral);
    }

    // pour enregister en fichier Joson
    //  localStorage.exercises = JSON.stringify(exerciseArray);
    // pour recuperer en json
  };
  const cardView = () => {
    mouvie.genre_ids
      ? mouvie.genre_ids.map((genreId, index) => {
          return (
            (<h5>Genres: </h5>),
            (
              <i key={index}>
                ==============
                {genre.map((gender) => {
                  return (
                    genreId === gender.id && (
                      <li key={gender.id}>{gender.name}</li>
                    )
                  );
                })}
                ==========
              </i>
            )
          );
        })
      : mouvie.genres.map((gender) => {
          // return (
          //   <i>
          //     <li key={gender.id}>{gender.name}</li>
          //   </i>
          // );
        });
  };

  // ============================
  // const changeColor = () => {
  //   mouvie.genre_ids ? "" : window.location.reload();
  // };

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
        {/* ============================ */}
        <ul>
          {/* {mouvie.genre_ids.map((genreId, index) => { */}
          {/* ============================================================= */}
          {cardView()}
          {/* ============================================================= */}
          {/* ============================= */}
        </ul>
        <h5>Synopsis</h5>
        <p>{mouvie.overview}</p>
        {mouvie.genre_ids ? (
          <FontAwesomeIcon
            icon="fa-solid fa-heart"
            // style={{ isColor color: "white": color: "white" }
            onClick={(e) => {
              getfavorite(e);
              isColor ? setisColor(false) : setisColor(true);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="fa-solid fa-heart"
            onClick={(e) => {
              getfavorite(e);
              window.location.reload();
            }}
          />
        )}
        {/* {isColor ? style{{ color: "red" }:style{{ color: "blue" }}} */}
        {/* className={(nav) => (nav.isColor ? "fa-heart" : "fa-heartNon")} */}
      </li>
    </div>
  );
};

export default Card;
