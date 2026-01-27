import type { MovieCategory } from "../../services/themoviedb";
import "./MovieRow.css";
const API_IMAGE_BASE = "https://image.tmdb.org/t/p/w300/";

interface MovieRowProps {
  movieRowList: MovieCategory[];
}

const MovieRow = ({ movieRowList }: MovieRowProps) => {
  return (
    <>
      {movieRowList &&
        movieRowList.map((currentMovieRow, key) => {
          if (currentMovieRow.items.results.length > 0) {
            // iterate in each movie row
            return (
              <div className="movieRow" key={key}>
                <h2>{currentMovieRow.title}</h2>
                <div className="movieRow--listarea">
                  <div className="movieRow--list">
                    {currentMovieRow.items.results &&
                      currentMovieRow.items.results.map((currentMovie, key) => {
                        // iterate in each movie
                        return (
                          <div key={key} className="movieRow--item">
                            <img
                              src={API_IMAGE_BASE + currentMovie.poster_path}
                              alt={currentMovie.name || currentMovie.title}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default MovieRow;
