import styled from "styled-components";

const InputWrapper = styled.input``;

const Input = ({ register }): JSX.Element => {
  return <InputWrapper {...register} />;
};

export default Input;
