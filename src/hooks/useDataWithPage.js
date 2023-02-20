import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../Pages/MainPage";

export const useDataWithPage = (url) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { data: result } = useSWR(url + `&page=${page}`, fetcher);

  useEffect(() => {
    result && setData((prev) => [...prev, ...result.results]);
  }, [page, result]);

  return [data, result, setPage];
};
