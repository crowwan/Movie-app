import Header from "./layouts/Header";
import Main from "./Pages/Main";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 70vw;
`;
function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <GlobalStyles />
          <div className="App">
            <Header />
            <Main />
          </div>
        </Container>
      </Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
