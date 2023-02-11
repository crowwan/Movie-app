import Header from "./layouts/Header";
import Main from "./layouts/Main";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

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
    <Wrapper>
      <Container>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Main />
        </div>
      </Container>
    </Wrapper>
  );
}

export default App;
