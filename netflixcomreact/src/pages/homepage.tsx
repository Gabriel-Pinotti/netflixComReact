import "./homepage.css";
import { useEffect, useState } from "react";
import getHomeList, { type MovieCategory } from "../services/themoviedb.tsx";

const HomePage = () => {
  const [movieList, setMovieList] = useState<MovieCategory[]>();

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
        {movieList &&
          movieList.map((category, index) => {
            return <div key={index}>{category.title}</div>;
          })}
      </section>
    </div>
  );
};

export default HomePage;
