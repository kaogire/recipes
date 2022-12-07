import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const columnDetails = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1vw 15vw 0vw 2vw",
  margin: "0px 0px 30px 0px",
};

const rowDetails = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "left",
  padding: "1vw 10vw 0vw 2vw",
  margin: "0px 0px 0px 0px",
};

const categories = {
  border: "1px solid white",
  borderRadius: "8px",
  padding: "5px 10px",
  margin: "0px 10px",
};
const categoriesContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const item = {
  border: "1px solid white",
  borderRadius: "8px",
  padding: "20px 50px",
};

const img = {
  width: "30vw",
  height: "auto",
};

const button = {
  border: "1px solid white",
  borderRadius: "8px",
  padding: "10px 20px",
  margin: "0px 10px",
  width: "35%",
  cursor: "pointer",
  textDecoration: "none",
};

function RecipeCardDetails() {
  const history = useHistory();
  const { film_id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/d/${film_id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
      });
  }, []);

  const addToWatchlist = useCallback(() => {
    fetch("http://localhost:3000/w", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...film }),
    }).then(() => {
      history.push("/watchList");
    });
  }, [film]);

  return (
    <div>
      <Header noSearch />
      <div>
        <div>
          <div style={columnDetails}>
            {film && (
              <>
                <div style={rowDetails}>
                  <h1 style={item}>{film.l}</h1>
                  <div style={categoriesContainer}>
                    <h3 style={categories}>Category : {film.qid}</h3>
                    <h3 style={categories}>Genre : {film.genre}</h3>
                  </div>
                  <h4 style={item}>{film.description}</h4>
                  <h4 style={item}>Release Year : {film.y}</h4>
                  <h4 style={item}>Rank on IMDB : {film.rank}</h4>
                  <button style={button}>Watch Now</button>
                  <div>
                    <button style={button} onClick={addToWatchlist}>
                      Add to Watch List
                    </button>
                    {/* <button style={button} onClick={addToWatchlist}>
                      Remove from Watch List
                    </button> */}
                  </div>
                </div>
                <div>
                  <div>
                    <img src={film.i.imageUrl} alt={film.l} style={img} />
                  </div>
                  <div>
                    <h3>Key Cast Members</h3>
                    <h4>{film.s}</h4>
                  </div>
                </div>
                <div>
                    <Reviews />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
}

export default RecipeCardDetails;
