import "./homepage.css";
import { useEffect, useState } from "react";
import TMDb from "../services/themoviedb.ts";
import { type MovieCategory, type MovieData } from "../services/themoviedb.ts";
import MovieRow from "../components/MovieRow/MovieRow.tsx";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie.tsx";
import Header from "../components/Header/Header.tsx";

const HomePage = () => {
  const [movieList, setMovieList] = useState<MovieCategory[]>([]);
  const [featuredMovieData, setFeaturedMovieData] = useState<MovieData>();
  const [blackHeader, setBlackHeader] = useState<boolean>(false);

  useEffect(() => {
    // on page load
    const loadAll = async () => {
      const homePageList = await TMDb.getHomeList(); // get all home page items
      setMovieList(homePageList); // assign to list
      console.log(homePageList); // TODO remove console.log

      const originals = homePageList.filter((i) => i.slug === "originals"); // filter Netflix originals
      const randomNum = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const randomMovie = originals[0].items.results[randomNum]; // get random movie (from originals)
      const randomMovieInfo = await TMDb.getMovieInfo(randomMovie.id, "tv"); // fetch info about random movie
      setFeaturedMovieData(randomMovieInfo); // use random movie data as featured
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header blackHeader={blackHeader} />
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
