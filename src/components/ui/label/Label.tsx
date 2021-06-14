import styled from "styled-components";
import { LabelProps } from "./types";

const LabelWrapper = styled.label<{ padding?: string }>`
  font-size: 2rem;
  padding: ${({ padding }) => padding};
`;

const Label = ({ children, htmlFor, padding }: LabelProps): JSX.Element => {
  return (
    <LabelWrapper htmlFor={htmlFor} padding={padding}>
      {children}
    </LabelWrapper>
  );
};

export default Label;
