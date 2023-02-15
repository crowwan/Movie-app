import React from "react";
import styled from "styled-components";
import RecommendationCards from "../components/RecommendationCards";

const StyledLabel = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
`;
const StyledDiv = styled.div`
  color: white;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  height: 5rem;
`;

function Recommendations({ data }) {
  console.log(data);
  return (
    <>
      <StyledLabel>Recommendations</StyledLabel>
      {data.results.length ? (
        <RecommendationCards data={data} />
      ) : (
        <StyledDiv>No Recommendations</StyledDiv>
      )}
    </>
  );
}

export default Recommendations;
