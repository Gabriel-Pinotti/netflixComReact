import type { MovieCategory } from "../../services/themoviedb";
import "./MovieRow.css";

interface MovieRowProps {
  movieRowList: MovieCategory[];
}

const MovieRow = ({ movieRowList }: MovieRowProps) => {
  return (
    <section>
      {movieRowList &&
        movieRowList.map((currentMovieRow, key) => {
          return (
            <section key={key}>
              <h3 className="categoryTitle">{currentMovieRow.title}</h3>
              {currentMovieRow.items.results &&
                currentMovieRow.items.results.map((currentMovie, key) => {
                  return (
                    <div key={key}>
                      <a className="movieTitle">
                        {currentMovie.name}
                        {currentMovie.title}
                      </a>
                      <br />
                    </div>
                  );
                })}
            </section>
          );
        })}
    </section>
  );
};

export default MovieRow;
