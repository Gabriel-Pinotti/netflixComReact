import "./FeaturedMovie.css";
import { type MovieData } from "../../services/themoviedb.ts";
interface Props {
  featured: MovieData;
}

const FeaturedMovie = ({ featured }: Props) => {
  return <>{featured.name}</>;
};

export default FeaturedMovie;
