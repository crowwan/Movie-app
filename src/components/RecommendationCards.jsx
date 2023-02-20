import React, { useCallback, useEffect, useRef, useState } from "react";
import { IMG_URL } from "../data/urls";
import Card from "./Card";
import styled from "styled-components";
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
  cursor: pointer;
  border: 2px solid #35447c;
  color: #35447c;
  & > span {
    display: block;
    width: 100%;
  }
`;
const LeftArrow = styled(Arrow)``;
const RightArrow = styled(Arrow)`
  right: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledCards = styled.div`
  display: flex;
  gap: 1rem;
  transform: translateX(${(props) => props.pos});
  transition: all 0.5s;
`;

function RecommendationCards({ data }) {
  const [pos, setPos] = useState(0);
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);
  const containerRef = useRef();
  const cardsBoxRef = useRef();

  const onArrowClick = (amount) => () => {
    const n = pos + amount;
    setPos(n);
  };
  const setDisable = useCallback((a, b) => {
    setLeftDisable(a);
    setRightDisable(b);
  }, []);
  console.log("render");
  useEffect(() => {
    const containerW = containerRef.current.offsetWidth;
    const cardsBoxW = cardsBoxRef.current.offsetWidth;
    const childW = cardsBoxRef.current.childNodes[0].offsetWidth;

    console.log(pos);
    if (containerW >= cardsBoxW) {
      setDisable(true, true);
    } else if (pos >= 0) {
      setDisable(true, false);
    } else if (
      pos * 2 <=
      Math.floor(cardsBoxW / childW) * -1 + Math.floor(containerW / childW)
    ) {
      setDisable(false, true);
    } else {
      setDisable(false, false);
    }
  }, [pos]);

  return (
    <StyledContainer ref={containerRef}>
      <StyledCards
        pos={`${pos * cardsBoxRef.current?.childNodes[0].offsetWidth * 2}px`}
        ref={cardsBoxRef}
      >
        {data.results.map((a) => (
          <Card key={a.id} imgUrl={IMG_URL + a.poster_path} data={a} />
        ))}
      </StyledCards>
      {!leftDisable && (
        <LeftArrow onClick={onArrowClick(1)}>
          <span>{"<"}</span>
        </LeftArrow>
      )}
      {!rightDisable && (
        <RightArrow onClick={onArrowClick(-1)}>
          <span>{">"}</span>
        </RightArrow>
      )}
    </StyledContainer>
  );
}

export default RecommendationCards;
