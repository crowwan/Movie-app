import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  outline: none;
  font-size: 24px;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 5px;
`;
const FilterBox = styled.select`
  background-color: transparent;
  border-radius: 15px;
  border: none;
  box-shadow: 0 0 5px;
  width: 20%;
`;

function Search() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Input type="text" value={value} onChange={onChange} />
      <FilterBox />
    </>
  );
}

export default Search;
