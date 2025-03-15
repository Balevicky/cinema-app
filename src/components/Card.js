import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Card = ({ mouvie, genre }) => {
  const [arrFavorite, setArrFavorit] = useState([]);
  const [isNewArray, setIsNewArray] = useState(true);
  let tab = [];
  const getfavorite = () => {
    // // setArrFavorit((arrFavorite) => [...arrFavorite, mouvie.id]);
    // // tab = [...JSON.parse(localStorage.mouvieID)];
    // // console.log(tab);
    // setArrFavorit((arrFavorite) => [
    // //   ...arrFavorite,
    // //   JSON.parse(localStorage.mouvieID),
    // // ]);
    // // console.log(arrFavorite);

    // setArrFavorit((arrFavorite) => [...arrFavorite, mouvie.id]);
    // // if (arrFavorite.includes(mouvie.id)) {
    // //   console.log(mouvie.id);
    // //   console.log("tes1");
    // //   return;
    // // } else {
    // //   // console.log("tes2");
    // //   // tab = JSON.parse(localStorage.mouvieID);
    // //   // console.log(tab);
    // //   setArrFavorit((arrFavorite) => [...arrFavorite, mouvie.id]);
    // //   setArrFavorit((arrFavorite) => [...arrFavorite, mouvie.id]);
    // //   // setArrFavorit(tab)
    // //   if ((arrFavorite.length = 0)) {
    // //     setArrFavorit(() => [mouvie.id]);
    // //     console.log("tes2");
    // //   } else {
    // //     console.log("tes3");
    // //     setArrFavorit((arrFavorite) => [...arrFavorite, mouvie.id]);
    // //   }
    // // }
    console.log(arrFavorite);
    localStorage.mouvieID = JSON.stringify(arrFavorite);

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
