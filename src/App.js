import MainPage from "./Pages/MainPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
