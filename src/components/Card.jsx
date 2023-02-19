import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledCard = styled.div`
  width: 15rem;
  height: 25rem;
  margin-bottom: 2rem;
`;
const StyledBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
`;
const StyledImage = styled.img`
  height: 80%;
  object-fit: cover;
`;
const StyledTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #35447c;
`;
function Card({ imgUrl, data }) {
  return (
    <Link to={`/movie/${data.id}`}>
      <StyledCard>
        <StyledBackground>
          <StyledImage src={`${imgUrl}`} alt="" />
          <StyledTitleBox>
            <span>{data.title}</span>
            <span>{data.vote_average.toFixed(1)}</span>
          </StyledTitleBox>
        </StyledBackground>
      </StyledCard>
    </Link>
  );
}

export default memo(Card);
