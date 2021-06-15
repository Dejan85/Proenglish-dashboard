import styled from "styled-components";
import { ButtonProps } from "./types";

const ButtonWrapper = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: orange;
  color: white;
  transition: 1s all;
  cursor: pointer;
  font-size: 1.5rem;

  :hover {
    background-color: #ba8421;
  }
`;

const Button = ({ children, type }: ButtonProps): JSX.Element => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

export default Button;
