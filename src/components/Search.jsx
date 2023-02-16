import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const searchValue = useSelector((state) => state.search);
  const dispatch = useDispatch();
  // enter키 누르면 검색
  console.log(searchValue);
  return (
    <>
      <Input
        type="text"
        defaultValue={""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(setValue(e.target.value));
          }
        }}
      />
      <FilterBox />
    </>
  );
}

export default Search;
