import "./FeaturedMovie.css";
import { type MovieData } from "../../services/themoviedb.ts";
const API_IMAGE_BASE = "https://image.tmdb.org/t/p/original/";

interface Props {
  featured: MovieData;
}

const FeaturedMovie = ({ featured }: Props) => {
  const firstDate = new Date(featured.first_air_date);

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
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {featured.number_of_seasons} temporada
              {featured.number_of_seasons != 1 ? "s" : ""}
            </div>
            <div className="featured--description">{featured.overview}</div>
            <div className="featured--buttons-area">
              <a href="">▶ Assistir</a> <br />
              <a href="">+ Minha lista</a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong>
              {featured.genres &&
                featured.genres.map((currentGender, key) => {
                  return (
                    <a key={key}>
                      {currentGender.name}
                      {key == featured.genres.length - 1 ? "" : ", "}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
