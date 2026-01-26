import "./homepage.css";
import { useEffect } from "react";
import TMDb from "../services/themoviedb.tsx";

const HomePage = () => {
  useEffect(() => {
    const loadAll = async () => {
      const homePageList = await TMDb.getHomeList();
      console.log(homePageList);
    };

    loadAll();
  }, []);
  return <></>;
};

export default HomePage;
