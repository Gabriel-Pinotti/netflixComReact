import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";

const Router = () => {
  return (
    <BrowserRouter basename="/netflixComReact/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
