import "./homepage.css";
import { useEffect } from "react";
import getHomeList from "../services/themoviedb.tsx";

const HomePage = () => {
  useEffect(() => {
    getHomeList.getHomeList();
  });
  return <></>;
};

export default HomePage;
