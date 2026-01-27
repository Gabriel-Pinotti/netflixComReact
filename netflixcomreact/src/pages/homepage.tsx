import "./homepage.css";
import { useEffect, useState } from "react";
import TMDb from "../services/themoviedb.ts";
import { type MovieCategory, type MovieData } from "../services/themoviedb.ts";
import MovieRow from "../components/MovieRow/MovieRow.tsx";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.tsx";

const HomePage = () => {
  const [movieList, setMovieList] = useState<MovieCategory[]>([]);
  const [featuredMovieData, setFeaturedMovieData] = useState<MovieData>();

  useEffect(() => {
    const loadAll = async () => {
      const homePageList = await TMDb.getHomeList();
      setMovieList(homePageList);
      console.log(homePageList); // TODO remove console.log

      const originals = homePageList.filter((i) => i.slug === "originals");
      const randomNum = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const randomMovie = originals[0].items.results[randomNum];
      setFeaturedMovieData(randomMovie);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="featured">
        {featuredMovieData && <FeaturedMovie featured={featuredMovieData} />}
      </section>
      <section className="lists">
        <MovieRow movieRowList={movieList} />
      </section>
    </div>
  );
};

export default HomePage;
