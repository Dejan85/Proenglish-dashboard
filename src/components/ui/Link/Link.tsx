import { LinkProps } from "./types";
import Link from "next/link";
import styled from "styled-components";

const AWrapper = styled.a`
  padding: 1rem;
  color: #e0a327;
  font-size: 1.5rem;
  border: 1px solid orange;
  cursor: pointer;
`;

const LinkUi = ({ children, href }: LinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <AWrapper>{children}</AWrapper>
    </Link>
  );
};

export default LinkUi;
