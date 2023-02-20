import React, { useEffect, useRef, useState } from "react";
import StyledContainer from "../components/StyledContainer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import axios from "axios";
import useSWR from "swr";
import { API_URL_PATH } from "../data/urls";
import { useDataWithPage } from "../hooks/useDataWithPage";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

function MainPage() {
  const [data, result, setPage] = useDataWithPage(
    `${API_URL_PATH}?api_key=46779acb390ace5e9843e8f8a752dace&query=''`
  );
  // const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  // const { data: result } = useSWR(
  //   fetcher,
  //   { shouldRetryOnError: false }
  // );

  // useEffect(() => {
  //   console.log(result);
  //   result && setData((prev) => [...prev, ...result.results]);
  // }, [page, result]);
  // useEffect(() => {
  //   /**
  //    * 문제 1 : intersectionObserver에 대해 잘 모른다.
  //    * 문제 2 : 처음 렌더링 시에는 data가 없기 때문에 div박스가 이미 viewport 안에 들어와있다.(default가 viewport인가?)
  //    * 문제 3 : 왜 인지 모르겠는데 div를 새로 observe하고 스크롤 했을 때 intersectionRatio가 0.2158...에서 멈춘다.
  //    *  - 3번은 아마 div를 계속해서 바꿔야하기 때문이 아닐까 생각한다.
  //    *
  //    * div가 뷰포트에서 보이는 비율이 0.2x가 아닐까? 라는 생각이 든다.
  //    * unobserve를 하는 이유 => 이미 렌더링이 된 애들은 감시하지 않기 위해서?
  //    */
  /**
   * 다른 방법을 사용
   * 문제 1 새로운 데이터가 들어왔을 때 리랜더링으로 인해서 화면이 맨 위로 올라간다
   * 문제 2 반복적인 데이터 요청으로 리랜더링 시간이 길어졌다
   */
  //   if (data) {
  //     console.log("data");
  //     setIo(() => {
  //       const newIo = new IntersectionObserver(
  //         ([entry], observer) => {
  //           console.log("test");
  //           console.log(entry.target);
  //           console.log(entry.intersectionRatio);
  //           if (entry.isIntersecting) {
  //             observer.unobserve(entry.target);
  //             console.log(entry.intersectionRatio);
  //             observer.observe(entry.target);
  //           } else {
  //             console.log("test2");
  //           }
  //         },
  //         {
  //           threshold: 1,
  //         }
  //       );
  //       // newIo.observe(mainRef);
  //       return newIo;
  //     });
  //   }

  //   return () => io && io.disconnect();
  // }, [data]);
  return (
    <StyledContainer>
      <Header />
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

export default MainPage;
