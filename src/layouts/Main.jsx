import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { data } from "../data/data";

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Main() {
  return (
    <StyledCardContainer>
      {data.results.map((a) => (
        <Card key={a.id} imgUrl={data.imageUrl} data={a} />
      ))}
    </StyledCardContainer>
  );
}

export default Main;
