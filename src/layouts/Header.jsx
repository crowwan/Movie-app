import React from "react";
import styled from "styled-components";
import Search from "../components/Search";

const HeaderStyled = styled.header`
  padding: 2rem;
  display: flex;
  color: #35447c;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderStyled>
      <Search />
    </HeaderStyled>
  );
}

export default Header;
