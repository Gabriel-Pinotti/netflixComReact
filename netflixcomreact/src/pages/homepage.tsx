import "./homepage.css";
import { useEffect, useState } from "react";
import getHomeList, { type MovieCategory } from "../services/themoviedb.ts";
import MovieRow from "../components/MovieRow/MovieRow.tsx";

const HomePage = () => {
  const [movieList, setMovieList] = useState<MovieCategory[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      const homePageList = await getHomeList();
      setMovieList(homePageList);
      console.log(homePageList); // TODO remove console.log
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        <MovieRow movieRowList={movieList} />
      </section>
    </div>
  );
};

export default HomePage;
