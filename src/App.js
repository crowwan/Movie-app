import MainPage from "./Pages/MainPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/movie/search/:name" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
