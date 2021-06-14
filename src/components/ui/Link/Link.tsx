import { LinkProps } from "./types";
import Link from "next/link";
import styled from "styled-components";

const AWrapper = styled.a``;

const LinkUi = ({ children, href }: LinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <AWrapper>{children}</AWrapper>
    </Link>
  );
};

export default LinkUi;
