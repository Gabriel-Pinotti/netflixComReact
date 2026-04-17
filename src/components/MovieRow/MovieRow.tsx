import type { MovieCategory } from "../../services/themoviedb";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import "./MovieRow.css";
const API_IMAGE_BASE = "https://image.tmdb.org/t/p/w300/";

interface MovieRowProps {
  movieRow: MovieCategory;
}

const MovieRow = ({ movieRow }: MovieRowProps) => {
  const [rowXScroll, setrowXScroll] = useState<number>(0);

  const handleLeftArrow = () => {
    let x = rowXScroll + Math.round(window.innerWidth / 2);
    const maxscroll = 0;
    if (x > maxscroll) {
      x = maxscroll;
    }
    setrowXScroll(x);
  };

  const handleRightArrow = () => {
    let x = rowXScroll - Math.round(window.innerWidth / 2);
    const listW = movieRow.items.results.length * 250;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setrowXScroll(x);
  };

  return (
    <>
      <div className="movieRow">
        <h2>{movieRow.title}</h2>
        <div className="movieRow--arrowLeft" onClick={handleLeftArrow}>
          <NavigateBefore style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--arrowRight" onClick={handleRightArrow}>
          <NavigateNext style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--listarea">
          <div
            className="movieRow--list"
            style={{
              marginLeft: rowXScroll,
              width: movieRow.items.results.length * 250,
            }}
          >
            {movieRow.items.results &&
              movieRow.items.results.map((currentMovie, key) => {
                // iterate in each movie
                if (currentMovie.poster_path != null) {
                  // added to remove empty banners and empty requests to TMDb API
                  return (
                    <div key={key} className="movieRow--item">
                      <img
                        src={API_IMAGE_BASE + currentMovie.poster_path}
                        alt={currentMovie.name || currentMovie.title}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieRow;
