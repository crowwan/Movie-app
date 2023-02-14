import React, { useState } from "react";
import StyledContainer from "../components/StyledContainer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import axios from "axios";
import useSWR from "swr";
import { API_URL_PATH } from "../data/urls";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

function MainPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSWR(
    `${API_URL_PATH}?api_key=46779acb390ace5e9843e8f8a752dace&query=''`,
    fetcher,
    { shouldRetryOnError: false }
  );
  return (
    <StyledContainer>
      <Header />
      <Main data={data} isLoading={isLoading} error={error} />
    </StyledContainer>
  );
}

export default MainPage;
