import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { IMG_URL } from "../data/urls";

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Main({ data }) {
  console.log(data);
  return (
    <StyledCardContainer>
      {data &&
        data.results.map((a) => (
          <Card key={a.id} imgUrl={IMG_URL + a.poster_path} data={a} />
        ))}
    </StyledCardContainer>
  );
}

export default Main;
