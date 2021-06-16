import React from "react";
import styled from "styled-components";
import { NavProps } from "./types";

const NavWrapper = styled.nav`
  outline: 1px solid red;
  height: 100%;
  width: 15%;
`;

const Nav: React.FC<NavProps> = ({ children }): JSX.Element => {
  return <NavWrapper>{children}</NavWrapper>;
};

export default Nav;
