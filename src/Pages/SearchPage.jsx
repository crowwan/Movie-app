import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../components/StyledContainer";
import useSWR from "swr";
import { IMG_URL, SEARCH_API } from "../data/urls";
import Card from "../components/Card";
import { fetcher } from "./MainPage";
import Main from "../layouts/Main";
import { useDataWithPage } from "../hooks/useDataWithPage";

const StyledHeader = styled.h3`
  padding: 3rem;
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid white;
  margin-bottom: 3rem;
`;
const StyledToMain = styled.div`
  display: flex;
  position: absolute;
  padding: 0.5rem;
  align-items: center;
  height: 5rem;
`;
const StyledBtn = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

function SearchPage() {
  const { name } = useParams();
  const navigation = useNavigate();
  const [data, result, setPage] = useDataWithPage(
    `${SEARCH_API}&query=${name}`
  );

  return (
    <StyledContainer>
      <StyledToMain>
        <StyledBtn
          onClick={() => {
            navigation("/");
          }}
        >
          {"<"} 메인으로
        </StyledBtn>
      </StyledToMain>
      <StyledHeader>{`${name}의 검색 결과입니다.`}</StyledHeader>
      {result && (
        <Main
          data={data}
          setPage={setPage}
          page={result.page}
          total_pages={result.total_pages}
        />
      )}
    </StyledContainer>
  );
}

export default SearchPage;
