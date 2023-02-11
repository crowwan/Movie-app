import React from "react";
import styled from "styled-components";
const StyledCard = styled.div``;
const StyledBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  height: 25rem;
  margin-bottom: 2rem;
  cursor: pointer;
  & > img {
    height: 80%;
    object-fit: contain;
  }
`;
const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #35447c;
  color: #f3f3f3;
`;
function Card() {
  return (
    <StyledCard>
      <StyledBackground>
        <img
          src="https://image.tmdb.org/t/p/w1280/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
          alt=""
        />
        <StyledTitle>
          <span>Puss in Boots: The Last Wish</span>
          <span>8.6</span>
        </StyledTitle>
      </StyledBackground>
    </StyledCard>
  );
}

export default Card;
