import styled from "styled-components";
import { ButtonProps } from "./types";

const ButtonWrapper = styled.button``;

const Button = ({ children, type }: ButtonProps): JSX.Element => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

export default Button;
