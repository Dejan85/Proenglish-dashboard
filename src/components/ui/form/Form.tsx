import React from "react";
import styled from "styled-components";
import { FormProps } from "./types";

const FormWrapper = styled.form`
  outline: 1px solid red;
  /* width: 50vw; */
`;

const Form = ({ onSubmit, children }: FormProps): JSX.Element => {
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
};

export default Form;
