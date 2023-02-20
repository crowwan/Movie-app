import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { IMG_URL } from "../data/urls";

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledButtonContainer = styled(StyledCardContainer)`
  justify-content: center;
  margin-bottom: 2rem;
`;
const StyledMoreBtn = styled.button`
  background-color: #35447c;
  border-radius: 10px;
  padding: 1rem 2rem;
  color: white;
`;

function Main({ data, setPage, page, total_pages }) {
  console.log(data);
  return (
    <>
      <StyledCardContainer>
        {data &&
          data.map((a) => (
            <Card key={a.id} imgUrl={IMG_URL + a.poster_path} data={a} />
          ))}
      </StyledCardContainer>
      {page < total_pages && (
        <StyledButtonContainer>
          <StyledMoreBtn onClick={() => setPage((prev) => prev + 1)}>
            More
          </StyledMoreBtn>
        </StyledButtonContainer>
      )}
    </>
  );
}

export default Main;
