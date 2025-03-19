import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Card = ({ mouvie, genre }) => {
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

  // ============================
  const changeColor = () => {
    // ====================================================
    let tabGeneral = localStorage.mouvieID
      ? [...JSON.parse(localStorage.mouvieID)]
      : [];
    if (tabGeneral.includes(mouvie.id)) {
      setisColor(true);
    } else {
      setisColor(false);
    }
    // ====================================================
    // console.log(isColor);
  };
  useEffect(() => {
    changeColor();
  }, []);
  // formater la date
  const formaterDate = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  return (
    <div className="card">
      <li>
        <img
          src={
            mouvie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + mouvie.poster_path
              : "./img/poster.jpg"
          }
          alt={"photo de " + mouvie.title}
        />
        <h2> {mouvie.title}</h2>
        {mouvie.release_date ? (
          <h5>Sortie le: {formaterDate(mouvie.release_date)}</h5>
        ) : null}

        <h4>
          Vote: {mouvie.vote_average}/10
          <span>
            {" "}
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{ color: "yellow" }}
            />
          </span>
        </h4>

        {/* {mouvie.genre_ids ? <h4>Genre</h4> : ""} */}
        <ul className="genre">
          {mouvie.genre_ids
            ? mouvie.genre_ids.map((genreId, index) => {
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
              })
            : mouvie.genres.map((gender) => {
                return <li key={gender.id}>{gender.name}</li>;
              })}
        </ul>
        {mouvie.overview ? <h3>Synopsis</h3> : ""}
        <p>{mouvie.overview}</p>

        {mouvie.genre_ids ? (
          <FontAwesomeIcon
            onClick={(e) => {
              getfavorite(e);
              isColor ? setisColor(false) : setisColor(true);
            }}
            icon="fa-solid fa-heart"
            className={isColor ? "color" : "white "}
          />
        ) : (
          <FontAwesomeIcon
            icon="fa-solid fa-heart"
            onClick={(e) => {
              getfavorite(e);
              window.location.reload();
            }}
            className={isColor ? "color" : "white "}
          />
        )}
      </li>
    </div>
  );
};

export default Card;
