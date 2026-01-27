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
          return <section key={key}>{currentMovieRow.title}</section>;
        })}
    </section>
  );
};

export default MovieRow;
