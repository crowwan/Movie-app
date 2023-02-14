import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { IMG_URL } from "../data/ulr";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  overflow: scroll;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Arrow = styled.div`
  display: flex;
  top: calc(50% - 50px);
  background-color: white;
  position: absolute;
  border-radius: 50%;
  font-weight: bold;
  align-items: center;
  text-align: center;
  width: 50px;
  height: 50px;
  & > span {
    display: block;
    width: 100%;
  }
`;
const LeftArrow = styled(Arrow)``;
const RightArrow = styled(Arrow)`
  right: 0;
`;
const StyledLabel = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
`;

function Recommendations({ data }) {
  return (
    <>
      <StyledLabel>Recommendations</StyledLabel>
      <StyledContainer>
        {data &&
          data.results.map((a) => (
            <Card key={a.id} imgUrl={IMG_URL + a.poster_path} data={a} />
          ))}
        <LeftArrow>
          <span>{"<"}</span>
        </LeftArrow>
        <RightArrow>
          <span>{">"}</span>
        </RightArrow>
      </StyledContainer>
    </>
  );
}

export default Recommendations;
