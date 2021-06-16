import styled from "styled-components";
import { NavProps } from "./types";

const NavWrapper = styled.nav`
  height: 100%;
  width: 20rem;
  box-shadow: 0 1px 1rem rgb(26 26 36 / 15%);
`;

const Nav: React.FC<NavProps> = ({ children }): JSX.Element => {
  return <NavWrapper>{children}</NavWrapper>;
};

export default Nav;
