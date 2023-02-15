import React from "react";
import StyledContainer from "../components/StyledContainer";
import Detail from "../layouts/Detail";
import useSWR from "swr";
import { fetcher } from "./MainPage";
import { useParams } from "react-router-dom";
import Recommendations from "../layouts/Recommendations";

function MoviePage() {
  const { id } = useParams();
  const {
    data: detail,
    isLoading,
    error,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=46779acb390ace5e9843e8f8a752dace`,
    fetcher
  );
  const { data: recommend } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=46779acb390ace5e9843e8f8a752dace`,
    fetcher
  );
  return (
    <StyledContainer>
      <Detail data={detail} isLoading={isLoading} error={error} />
      {recommend && <Recommendations data={recommend} />}
    </StyledContainer>
  );
}

export default MoviePage;
