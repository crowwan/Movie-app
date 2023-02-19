import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setValue } from "../app/searchSlice";

const Input = styled.input`
  width: 70%;
  outline: none;
  font-size: 24px;
  background-color: transparent;
  border: 1px solid #222222;
  color: white;
  border-radius: 15px;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 5px;
`;
const FilterBox = styled.select`
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid #222222;
  color: white;
  box-shadow: 0 0 5px;
  width: 20%;
`;

function Search() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  // enter키 누르면 검색
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      // console.log(test);
      // setTest("test2");
      // console.log(test);
      // dispatch(setValue(e.target.value));

      /**
       * dispatch 이후 navigation 안에서 searchValue를 접근하면 이전 상태값을 가지고 있다.
       * 이것도 비동기로 동작하는 이유이기 때문인가? useState에서 상태 변경함수를 써보자.
       * useState에서도 똑같이 동작한다.
       */
      navigation(`/movie/search/${e.target.value}`);
    }
  };
  return (
    <>
      <Input type="text" defaultValue={""} onKeyDown={onKeyDown} />
      <FilterBox />
    </>
  );
}

export default Search;
