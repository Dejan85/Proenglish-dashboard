import styled from "styled-components";

export default styled.div<{
  height?: string;
  column?: boolean;
  justifyContent?: string;
  alignItem?: string;
  maxWidth?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  align-items: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  margin: 0 auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  width: calc(100vw - 2rem);
  height: ${(props) => (props.height ? props.height : "")};
  background-color: red;
`;
