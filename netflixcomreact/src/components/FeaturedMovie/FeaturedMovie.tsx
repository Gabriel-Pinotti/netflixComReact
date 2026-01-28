import "./FeaturedMovie.css";
import { type MovieData } from "../../services/themoviedb.ts";
const API_IMAGE_BASE = "https://image.tmdb.org/t/p/original/";

interface Props {
  featured: MovieData;
}

const FeaturedMovie = ({ featured }: Props) => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${API_IMAGE_BASE}${featured.backdrop_path})`,
      }}
    >
      <div className="featured--vertical-fade">
        <div className="featured--horizontal-fade">
          <div className="featured--name">
            {featured.name || featured.title}
          </div>
          <div className="featured--info">
            <div className="featured--rating">
              {featured.vote_average} pontos
            </div>
            <div className="featured--year">2099</div>
            <div className="featured--seasons">
              {featured.number_of_seasons}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
