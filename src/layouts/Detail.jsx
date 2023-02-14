import React from "react";
import { IMG_URL } from "../data/urls";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  margin: 5rem 0;
  height: 80vh;
`;
const StyledSection = styled.section`
  width: 100%;
  padding: 2rem;
  color: white;
`;
const StyledTitle = styled.h2`
  display: block;
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
  font-size: 3rem;
  border: 1px solid white;
  margin-bottom: 2rem;
`;
function Detail({ data, isLoading, error }) {
  const tags = ["status", "popularity", "runtime", "vote_average"];
  return (
    <StyledContainer>
      {data && (
        <>
          <img src={`${IMG_URL}/${data.poster_path}`} />
          <StyledSection>
            <StyledTitle>{data.title}</StyledTitle>
            <div>
              <div>
                <h2>Overview</h2>
                <p>{data.overview}</p>
              </div>
              <div>
                <ul>
                  {tags.map((a) => (
                    <li>
                      <span>{a}</span>
                      <div>{data[a]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StyledSection>
        </>
      )}
    </StyledContainer>
  );
}

export default Detail;
